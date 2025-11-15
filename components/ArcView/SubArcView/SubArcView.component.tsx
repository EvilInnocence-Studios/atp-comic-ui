import { ComicImage } from "@comic/components/ComicImage";
import { overridable } from "@core/lib/overridable";
import { Col, Row } from "antd";
import Markdown from 'react-markdown';
import { Link } from "react-router";
import { ArcTitle } from "../ArcTitle";
import { SubArcViewProps } from "./SubArcView.d";
import styles from './SubArcView.module.scss';

export const SubArcGridComponent = overridable(({subArcs, archive:{mode}}:SubArcViewProps) => <>
    {mode === "grid" && subArcs.length > 0 && <div className={styles.subArcGrid}>
        {subArcs.map(subArc =>
            <div key={subArc.id} className={styles.listItem}>
                <Link to={`/comic/arc/${subArc.url}`}>
                    {!!subArc.thumbnailUrl && <ComicImage fileName={subArc.thumbnailUrl} className={styles.thumbnail}/>}
                    {!subArc.thumbnailUrl && <>Need missing thumbnail image TaggedImage</>}
                    <div className={styles.title}>
                        <ArcTitle arc={subArc} lineBreak />
                    </div>
                </Link>
            </div>
        )}
    </div>}
</>);

export const SubArcListComponent = overridable(({subArcs, archive:{mode}, subPages, pageNumber}:SubArcViewProps) => <>
    {mode === "list" && <ul className={styles.subArcList}>
        {subArcs.map(subArc =>
            <li key={subArc.id}>
                <Row gutter={16}>
                    <Col span={24}>
                        <h2><Link to={`/comic/arc/${subArc.url}`}>
                            <ArcTitle arc={subArc} />
                        </Link></h2>
                    </Col>
                    <Col span={6}>
                        <Link to={`/comic/arc/${subArc.url}`}>
                            {!!subArc.thumbnailUrl && <ComicImage fileName={subArc.thumbnailUrl} className={styles.thumbnail}/>}
                        </Link>
                    </Col>
                    <Col span={18}>
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
</>);
