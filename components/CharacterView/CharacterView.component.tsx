import { Col, Row } from "antd";
import Markdown from 'react-markdown';
import { CharacterImage } from "../CharacterImage";
import { CharacterAppearances } from "./CharacterAppearances";
import { CharacterAttributes } from "./CharacterAttributes";
import { CharacterMedia } from "./CharacterMedia";
import { CharacterViewProps } from "./CharacterView.d";
import styles from './CharacterView.module.scss';
import { overridable } from "@core/lib/overridable";

export const CharacterViewComponent = overridable(({ character, classes = styles }: CharacterViewProps) =>
    <div id={`character-${character.id}`} className={classes.characterView}>
        <Row gutter={[16, 16]}>
            <Col xs={9} sm={8}>
                <CharacterImage characterId={character.id} imageId={character.mainImageId} />
            </Col>
            <Col xs={15} sm={16}>
                <h2>{character.name}</h2>
                <Markdown>{character.bio}</Markdown>
            </Col>
            <Col xs={24} sm={16}>
                <CharacterAttributes characterId={character.id} />
                <CharacterAppearances characterId={character.id} />
            </Col>
            <Col xs={24} sm={8}>
                <CharacterMedia character={character} />
            </Col>
        </Row>
    </div>
);
