import { Col, Row, Select } from "antd";
import { CharacterImage } from "../CharacterImage";
import {CharacterViewProps} from "./CharacterView.d";
import styles from './CharacterView.module.scss';
import { Link } from "react-router";

export const CharacterViewComponent = ({character, attributes, pages}:CharacterViewProps) =>
    <div className={styles.characterView}>
        <Row gutter={[16, 16]}>
            <Col xs={9}>
                {!!character.mainImageId && <CharacterImage characterId={character.id} imageId={character.mainImageId} />}
            </Col>
            <Col xs={15}>
                <h2>{character.name}</h2>
                <p>{character.bio}</p>
                <dl>
                    {attributes.map(attr =>
                        <div key={attr.id}>
                            <dt><strong>{attr.name}</strong></dt>
                            <dd>{attr.value}</dd>
                        </div>
                    )}
                </dl>
                <h3>First appearance:</h3>
                {pages.length > 0 ? 
                    <p><Link to={`/comic/page/${pages[0].page?.url}`}>Page {pages[0].pageNumber} - {pages[0].page?.name || 'Untitled'}</Link></p> :
                    <p>No appearances found.</p>
                }
                <h3>Most recent appearance:</h3>
                {pages.length > 0 ? 
                    <p><Link to={`/comic/page/${pages[pages.length-1].page?.url}`}>Page {pages[pages.length - 1].pageNumber} - {pages[pages.length - 1].page?.name || 'Untitled'}</Link></p> :
                    <p>No appearances found.</p>
                }
                <Select
                    style={{width: '100%'}}
                    placeholder="Select Appearance Page"
                    options={pages.map(p => ({
                        value: p.page?.id || '',
                        label: `Page ${p.pageNumber} - ${p.page?.name || 'Untitled'}`,
                    }))}
                />
            </Col>
        </Row>
    </div>;
