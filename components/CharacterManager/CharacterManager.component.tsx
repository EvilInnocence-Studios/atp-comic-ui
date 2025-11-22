import { Col, Row, Spin } from "antd";
import { CharacterManagerProps } from "./CharacterManager.d";
import styles from './CharacterManager.module.scss';
import { CharacterEditor } from "../CharacterEditor";
import { SortableList } from "@core/components/SortableList";
import { IComicCharacter } from "@comic-shared/character/types";
import { prop } from "ts-functional";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { ClearCacheButton } from "@common/components/ClearCacheButton";
import { overridable } from "@core/lib/overridable";

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
    sort, refresh,
    classes = styles
}: CharacterManagerProps) =>
    <div className={classes.characterManager}>
        <Spin spinning={isLoading}>
            <h1><FontAwesomeIcon icon={faUsers} /> Characters</h1>
            <ClearCacheButton entity="character" cacheType="character" />
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
