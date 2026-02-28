import { MediaImage } from "@common/components/MediaImage";
import { overridable } from "@core/lib/overridable";
import { faAngleDoubleLeft, faAngleDoubleRight, faAngleLeft, faAngleRight, faBoxArchive } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { PageNavProps } from "./PageNav.d";
import styles from './PageNav.module.scss';

export const PageNavComponent = overridable(({
    firstPage, prevPage, lastPage, nextPage,
    arc,
    top, bottom,
    linkType,
    classes = styles
}: PageNavProps) =>
    <div className={clsx([classes.comicNavLinksContainer, top && classes.top, bottom && classes.bottom])} style={{ textAlign: "center", fontSize: "x-large" }}>
        <div className={classes.navItem}>
            <Link className={clsx(!prevPage && classes.noShow)} to={`/comic/page/${(firstPage?.url)}`}>
                {["icon", "text"].includes(linkType) && <FontAwesomeIcon icon={faAngleDoubleLeft} />}
                {["text"].includes(linkType) && " First"}
                {["image"].includes(linkType) && <MediaImage settingKey="comic.firstPageIcon" />}
            </Link>
        </div>
        <div className={classes.navItem}>
            <Link className={clsx(!prevPage && classes.noShow)} to={`/comic/page/${prevPage?.url}`}>
                {["icon", "text"].includes(linkType) && <FontAwesomeIcon icon={faAngleLeft} />}
                {["text"].includes(linkType) && " Previous"}
                {["image"].includes(linkType) && <MediaImage settingKey="comic.previousPageIcon" />}
            </Link>
        </div>
        <div className={classes.navItem}>
            <Link className={clsx(!arc && classes.noShow)} to={`/comic/arc/${arc?.url}`}>
                {["icon"].includes(linkType) && <FontAwesomeIcon icon={faBoxArchive} />}
                {["text"].includes(linkType) && `Archives`}
                {["image"].includes(linkType) && <MediaImage settingKey="comic.archiveIcon" />}
            </Link>
        </div>
        <div className={classes.navItem}>
            <Link className={clsx(!nextPage && classes.noShow)} to={`/comic/page/${nextPage?.url}`}>
                {["text"].includes(linkType) && " Next"}
                {["icon", "text"].includes(linkType) && <FontAwesomeIcon icon={faAngleRight} />}
                {["image"].includes(linkType) && <MediaImage settingKey="comic.nextPageIcon" />}
            </Link>
        </div>
        <div className={classes.navItem}>
            <Link className={clsx(!nextPage && classes.noShow)} to={`/comic/page/${lastPage?.url}`}>
                {["text"].includes(linkType) && " Last"}
                {["icon", "text"].includes(linkType) && <FontAwesomeIcon icon={faAngleDoubleRight} />}
                {["image"].includes(linkType) && <MediaImage settingKey="comic.lastPageIcon" />}
            </Link>
        </div>
    </div>
);
