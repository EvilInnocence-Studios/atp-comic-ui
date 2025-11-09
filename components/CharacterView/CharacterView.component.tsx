import { Col, Row, Select } from "antd";
import { CharacterImage } from "../CharacterImage";
import {CharacterViewProps} from "./CharacterView.d";
import styles from './CharacterView.module.scss';
import { Link } from "react-router";
import { MediaPopup } from "@core/components/MediaPopup";
import { prop } from "ts-functional";
import { ICharacterMedia } from "@comic-shared/character/types";

export const CharacterViewComponent = ({character, attributes, media, pages, goToPage}:CharacterViewProps) =>
    <div id={`character-${character.id}`} className={styles.characterView}>
        <Row gutter={[16, 16]}>
            <Col xs={9} sm={8}>
                {!!character.mainImageId && <CharacterImage characterId={character.id} imageId={character.mainImageId} />}
            </Col>
            <Col xs={15} sm={16}>
                <h2>{character.name}</h2>
                <p>{character.bio}</p>
            </Col>
            <Col xs={24} sm={16}>
                <table>
                    {attributes.map(attr =>
                        <tr key={attr.id}>
                            <th>{attr.name}:</th>
                            <td>{attr.value}</td>
                        </tr>
                    )}
                </table>
                {pages.length > 0
                    ? <table>
                        <tr>
                            <th>First appearance:</th>
                            <td><Link to={`/comic/page/${pages[0].page?.url}`}>Page {pages[0].pageNumber} - {pages[0].page?.name || 'Untitled'}</Link></td>
                        </tr>
                        <tr>
                            <th>Most recent appearance:</th>
                            <td><Link to={`/comic/page/${pages[pages.length-1].page?.url}`}>Page {pages[pages.length - 1].pageNumber} - {pages[pages.length - 1].page?.name || 'Untitled'}</Link></td>
                        </tr>
                        <tr>
                            <th>Total appearances:</th>
                            <td>{pages.length} pages</td>
                        </tr>
                    </table>
                    : <p>No appearances found.</p>
                }
                <Select
                    style={{width: '100%'}}
                    placeholder="All appearances"
                    onChange={goToPage}
                    options={pages.map(p => ({
                        value: p.page?.url || '',
                        label: `Page ${p.pageNumber} - ${p.page?.name || 'Untitled'}`,
                    }))}
                />
            </Col>
            <Col xs={24} sm={8}>
                <div className={styles.mediaList}>
                    <MediaPopup
                        vertical
                        media={media}
                        getId={prop<any, any>('id')}
                        render={(item:ICharacterMedia) => <CharacterImage characterId={character.id} imageId={item.id} />}
                    />
                </div>
            </Col>
        </Row>
    </div>;
