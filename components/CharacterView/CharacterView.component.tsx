import { Col, Row } from "antd";
import Markdown from 'react-markdown';
import { CharacterImage } from "../CharacterImage";
import { CharacterAppearances } from "./CharacterAppearances";
import { CharacterAttributes } from "./CharacterAttributes";
import { CharacterMedia } from "./CharacterMedia";
import { CharacterViewProps } from "./CharacterView.d";
import styles from './CharacterView.module.scss';
import { overridable } from "@core/lib/overridable";
import { ComicCharacterIdContext } from "@comic/lib/context";
import { Layout } from "@theming/components/Layout";

const Provider = ComicCharacterIdContext.Provider;

export const CharacterViewComponent = overridable(({ character, classes = styles }: CharacterViewProps) => <>
    <Provider value={character.id}>
        <Layout element="comciCharacter" />
    </Provider>
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
                <CharacterAttributes id={character.id} />
                <CharacterAppearances id={character.id} />
            </Col>
            <Col xs={24} sm={8}>
                <CharacterMedia id={character.id} />
            </Col>
        </Row>
    </div>
</>);
