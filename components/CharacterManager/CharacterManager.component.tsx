import { IComicCharacter } from "@comic-shared/character/types";
import { ClearCacheButton } from "@common/components/ClearCacheButton";
import { SortableList } from "@core/components/SortableList";
import { overridable } from "@core/lib/overridable";
import { faPlus, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Row, Spin } from "antd";
import { prop } from "ts-functional";
import { CharacterEditor } from "../CharacterEditor";
import { CharacterManagerProps } from "./CharacterManager.d";
import styles from './CharacterManager.module.scss';

export const CharacterItem = overridable(({ item: character, setSelectedCharacter, classes = styles }: any) =>
    <div
        className={classes.characterItem}
        onClick={setSelectedCharacter(character)}
    >
        {character.name}
    </div>
);

export const CharacterManagerComponent = overridable(({
    characters, isLoading,
    selectedCharacter, setSelectedCharacter,
    sort, refresh, createCharacter,
    classes = styles
}: CharacterManagerProps) =>
    <div className={classes.characterManager}>
        <Spin spinning={isLoading}>
            <div style={{ position: "absolute", right: "10px", top: "10px" }}>
                <ClearCacheButton entity="character" cacheType="character" />
            </div>
            <h1>
                <FontAwesomeIcon icon={faUsers} /> Characters
                &nbsp;
                <Button onClick={createCharacter} type="primary"><FontAwesomeIcon icon={faPlus} /> Create Character</Button>
            </h1>
            <Row gutter={[16, 16]}>
                <Col xs={3}>
                    <SortableList<IComicCharacter>
                        items={characters}
                        getId={prop<any, any>("id")}
                        getListId={(character: IComicCharacter, index: number) => `${character.id}:${index}`}
                        isActive={(character) => selectedCharacter?.id === character.id}
                        itemClassName={classes.characterListItem}
                        activeClassName={classes.selected}
                        ItemComponent={CharacterItem}
                        itemProps={{ setSelectedCharacter, classes }}
                        sort={sort}
                    />
                </Col>
                <Col xs={21}>
                    {selectedCharacter && <CharacterEditor character={selectedCharacter} refresh={refresh} />}
                </Col>
            </Row>
        </Spin>
    </div>
);
