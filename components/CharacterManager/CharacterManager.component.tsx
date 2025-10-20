import { Col, Row, Spin } from "antd";
import {CharacterManagerProps} from "./CharacterManager.d";
import styles from './CharacterManager.module.scss';
import { CharacterEditor } from "../CharacterEditor";
import { SortableList } from "@core/components/SortableList";
import { IComicCharacter } from "@comic-shared/character/types";
import { prop } from "ts-functional";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

const CharacterItem = ({item:character, setSelectedCharacter}:any) =>
    <div
        className={styles.characterItem}
        onClick={setSelectedCharacter(character)}
    >
        {character.name}
    </div>

export const CharacterManagerComponent = ({characters, isLoading, selectedCharacter, setSelectedCharacter, sort}:CharacterManagerProps) =>
    <div className={styles.characterManager}>
        <Spin spinning={isLoading}>
            <h1><FontAwesomeIcon icon={faUsers} /> Characters</h1>
            <Row gutter={[16, 16]}>
                <Col xs={3}>
                    <SortableList<IComicCharacter>
                        items={characters}
                        getId={prop<any, any>("id")}
                        getListId={(character:IComicCharacter, index:number) => `${character.id}:${index}`}
                        isActive={(character) => selectedCharacter?.id === character.id}
                        itemClassName={styles.characterListItem}
                        activeClassName={styles.selected}
                        ItemComponent={CharacterItem}
                        itemProps={{setSelectedCharacter}}
                        sort={sort}
                    />
                </Col>
                <Col xs={21}>
                    {selectedCharacter && <CharacterEditor character={selectedCharacter} />}
                </Col>
            </Row>
        </Spin>
    </div>;
