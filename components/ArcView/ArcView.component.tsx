import { Link } from "react-router";
import { ComicImage } from "../ComicImage";
import {ArcViewProps} from "./ArcView.d";
import styles from './ArcView.module.scss';
import Markdown from 'react-markdown';
import { Col, Row, Switch } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faTableCellsLarge } from "@fortawesome/free-solid-svg-icons";

export const ArcViewComponent = ({arc, subArcs, pages, subPages, pageNumber, arcTypeName, parents, mode, setMode}:ArcViewProps) =>  <div className={styles.arcContainer}>
    {!!arc && <>
        <div className={styles.arcDetails}>
            {!!arc.bannerUrl && <ComicImage fileName={arc.bannerUrl} className={styles.banner}/>}
            <h1>{arc.name}</h1>
            <Markdown>{arc.summary}</Markdown>
            <ul className={styles.breadCrumbs}>
                {parents.map(({id, name, url}) =>
                    <li key={id}>
                        <Link to={`/comic/arc/${url}`}>{name}</Link>
                    </li>
                )}
            </ul>
        </div>
        {subArcs.length > 0 && <>
            <div className={styles.switch}>
                <Switch checked={mode === "list"}
                    checkedChildren={<><FontAwesomeIcon icon={faList} /> List View</>}
                    unCheckedChildren={<><FontAwesomeIcon icon={faTableCellsLarge} /> Grid View</>}
                    onChange={(checked) => {
                        setMode(checked ? "list" : "grid");
                    }}
                    defaultChecked={mode === "list"}
                />
            </div>
            {mode === "grid" && <div className={styles.subArcGrid}>
                {subArcs.map((subArc, index) =>
                    <div key={subArc.id} className={styles.listItem}>
                        <Link to={`/comic/arc/${subArc.url}`}>
                            {!!subArc.thumbnailUrl && <ComicImage fileName={subArc.thumbnailUrl} className={styles.thumbnail}/>}
                            {!subArc.thumbnailUrl && <>Need missing thumbnail image TaggedImage</>}
                            <div className={styles.title}>{arcTypeName(subArc)} {index + 1}: {subArc.name}</div>
                        </Link>
                    </div>
                )}
            </div>}
            {mode === "list" && <ul className={styles.subArcList}>
                {subArcs.map((subArc, index) =>
                    <li key={subArc.id}>
                        <Row gutter={16}>
                            <Col span={6}>
                                <Link to={`/comic/arc/${subArc.url}`}>
                                    {!!subArc.thumbnailUrl && <ComicImage fileName={subArc.thumbnailUrl} className={styles.thumbnail}/>}
                                </Link>
                            </Col>
                            <Col span={18}>
                                <h2><Link to={`/comic/arc/${subArc.url}`}>
                                    {arcTypeName(subArc)} {index + 1}: {subArc.name}
                                </Link></h2>
                                <Markdown>{subArc.summary}</Markdown>
                                {subPages(subArc.id).length > 0 && <ul className={styles.pageList}>
                                    {subPages(subArc.id).map(page =>
                                        <li key={page.id}>
                                            <Link to={`/comic/page/${page.url}`} title={page.name}>
                                                {pageNumber(page.id)}
                                            </Link>
                                        </li>
                                    )}
                                </ul>}
                            </Col>
                        </Row>
                    </li>
                )}
            </ul>}
        </>}
        {pages.length > 0 && <div className={styles.arcPages}>
            {pages.map(page =>
                <div className={styles.listItem} key={page.id}>
                    <Link to={`/comic/page/${page.url}`}>
                        <ComicImage fileName={page.imageUrl || ""} className={styles.thumbnail}/>
                        <div className={styles.title}>{page.name}</div>
                    </Link>
                </div>
            )}
        </div>}
    </>}
</div>;
