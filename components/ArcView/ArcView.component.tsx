import { faArrowDown19, faArrowUp91, faList, faTableCellsLarge, faTurnUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row, Switch } from "antd";
import Markdown from 'react-markdown';
import { Link } from "react-router";
import { ComicImage } from "../ComicImage";
import { ArcViewProps } from "./ArcView.d";
import styles from './ArcView.module.scss';
import { ArchiveViewModeToggle } from "../ArchiveViewModeToggle";
import { ArchiveSortOrderToggle } from "../ArchiveSortOrderToggle";

export const ArcViewComponent = ({
    arc, subArcs, pages,
    subPages, pageNumber, arcTypeName, arcNumber,
    parents,
    showDetails, showBanner, showViewModeToggle, showSortOrderToggle, breadCrumbMode, showBar, showDivider,
    archive:{mode}
}:ArcViewProps) =>  <div className={styles.arcContainer}>
    <h1>Archives</h1>
    {showDivider && <hr />}
    {!!arc && <>
        {showBanner && !!arc.bannerUrl && <ComicImage fileName={arc.bannerUrl} className={styles.banner}/>}
        {showDetails && <div className={styles.arcDetails}>
            <h1>{arcTypeName(arc)} {arcNumber(arc.id) }: {arc.name}</h1>
            <Markdown>{arc.summary}</Markdown>
        </div>}
        {showBar && <div className={styles.breadCrumbs}>
            {subArcs.length > 0 && <div className={styles.switch}>
                {showViewModeToggle && <ArchiveViewModeToggle />}
                &nbsp;
                {showSortOrderToggle && <ArchiveSortOrderToggle />}
            </div>}
            <ul>
                {breadCrumbMode === "full" && <>
                    {parents.map(parent => <li key={parent.id}>
                        <Link to={`/comic/arc/${parent.url}`}>{arcTypeName(parent)} {arcNumber(parent.id) }: {parent.name}</Link>
                    </li>)}
                    <li>{arcTypeName(arc)} {arcNumber(arc.id) }: {arc.name}</li>
                </>}

                {breadCrumbMode === "parent" && parents.length > 0 && <li>
                    <Link to={`/comic/arc/${parents[parents.length - 1].url}`}>
                        <FontAwesomeIcon icon={faTurnUp} flip="horizontal" />&nbsp;
                        {arcTypeName(parents[parents.length - 1])} {arcNumber(parents[parents.length - 1].id) }:&nbsp;
                        {parents[parents.length - 1].name}
                    </Link>
                </li>}
            </ul>
        </div>}
        {subArcs.length > 0 && <>
            {mode === "grid" && <div className={styles.subArcGrid}>
                {subArcs.map(subArc =>
                    <div key={subArc.id} className={styles.listItem}>
                        <Link to={`/comic/arc/${subArc.url}`}>
                            {!!subArc.thumbnailUrl && <ComicImage fileName={subArc.thumbnailUrl} className={styles.thumbnail}/>}
                            {!subArc.thumbnailUrl && <>Need missing thumbnail image TaggedImage</>}
                            <div className={styles.title}>
                                {arcTypeName(subArc)} {arcNumber(subArc.id) }:<br/>
                                {subArc.name}
                            </div>
                        </Link>
                    </div>
                )}
            </div>}
            {mode === "list" && <ul className={styles.subArcList}>
                {subArcs.map(subArc =>
                    <li key={subArc.id}>
                        <Row gutter={16}>
                            <Col span={6}>
                                <Link to={`/comic/arc/${subArc.url}`}>
                                    {!!subArc.thumbnailUrl && <ComicImage fileName={subArc.thumbnailUrl} className={styles.thumbnail}/>}
                                </Link>
                            </Col>
                            <Col span={18}>
                                <h2><Link to={`/comic/arc/${subArc.url}`}>
                                    {arcTypeName(subArc)} {arcNumber(subArc.id)}: {subArc.name}
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
