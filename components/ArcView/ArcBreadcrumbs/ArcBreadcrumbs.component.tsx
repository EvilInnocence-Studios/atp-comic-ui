import { overridable } from "@core/lib/overridable";
import { ArcBreadcrumbsProps } from "./ArcBreadcrumbs.d";
import styles from './ArcBreadcrumbs.module.scss';
import { ArchiveViewModeToggle } from "@comic/components/ArchiveViewModeToggle";
import { ArchiveSortOrderToggle } from "@comic/components/ArchiveSortOrderToggle";
import { ArcTitle } from "../ArcTitle";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTurnUp } from "@fortawesome/free-solid-svg-icons";

export const ArcBreadcrumbsComponent = overridable(({
    arc, subArcs, parents,
    showBar, showViewModeToggle, showSortOrderToggle, breadCrumbMode,
    classes = styles
}: ArcBreadcrumbsProps) => <>
        {showBar && arc && <div className={classes.breadCrumbs}>
            {subArcs.length > 0 && <div className={classes.switch}>
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
    </>
);
