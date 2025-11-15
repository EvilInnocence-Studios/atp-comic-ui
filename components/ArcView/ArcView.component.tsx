import { overridable } from "@core/lib/overridable";
import { faTurnUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Markdown from 'react-markdown';
import { Link } from "react-router";
import { ArchivesHeader } from "../ArchivesHeader";
import { ArchiveSortOrderToggle } from "../ArchiveSortOrderToggle";
import { ArchiveViewModeToggle } from "../ArchiveViewModeToggle";
import { ComicImage } from "../ComicImage";
import { ArcTitle } from "./ArcTitle";
import { ArcViewProps } from "./ArcView.d";
import styles from './ArcView.module.scss';
import { SubArcView } from "./SubArcView";

export const ArcViewComponent = overridable(({
    arc, subArcs, pages,
    parents,
    showDetails, showBanner, showViewModeToggle, showSortOrderToggle, breadCrumbMode, showBar,
}:ArcViewProps) => 
    <div className={styles.arcContainer}>
        <ArchivesHeader />
        {!!arc && <>
            {showBanner && !!arc.bannerUrl && <ComicImage fileName={arc.bannerUrl} className={styles.banner}/>}
            {showDetails && <div className={styles.arcDetails}>
                <h2><ArcTitle arc={arc} /></h2>
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
                            <Link to={`/comic/arc/${parent.url}`}><ArcTitle arc={parent} /></Link>
                        </li>)}
                        <li><ArcTitle arc={arc} /></li>
                    </>}

                    {breadCrumbMode === "parent" && parents.length > 0 && <li>
                        <Link to={`/comic/arc/${parents[parents.length - 1].url}`}>
                            <FontAwesomeIcon icon={faTurnUp} flip="horizontal" />&nbsp;
                            <ArcTitle arc={parents[parents.length - 1]} />
                        </Link>
                    </li>}
                </ul>
            </div>}
            <SubArcView arcId={arc.id} />
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
    </div>
);
