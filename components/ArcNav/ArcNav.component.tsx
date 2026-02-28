import { MediaImage } from "@common/components/MediaImage";
import { overridable } from "@core/lib/overridable";
import { faAngleDoubleLeft, faAngleDoubleRight, faAngleLeft, faAngleRight, faBoxArchive } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { Link } from "react-router";
import { ArcNavProps } from "./ArcNav.d";
import styles from './ArcNav.module.scss';

export const ArcNavComponent = overridable(({
    firstArc, prevArc, latestArc, nextArc, archiveArc,
    top, bottom,
    linkType,
    classes = styles
}: ArcNavProps) =>
    <div className={clsx([classes.comicNavLinksContainer, top && classes.top, bottom && classes.bottom])} style={{ textAlign: "center", fontSize: "x-large" }}>
        <div className={classes.navItem}>
            <Link className={clsx(!prevArc && classes.noShow)} to={`/comic/arc/${(firstArc?.url)}`}>
                {["icon", "text"].includes(linkType) && <FontAwesomeIcon icon={faAngleDoubleLeft} />}
                {["text"].includes(linkType) && " First"}
                {["image"].includes(linkType) && <MediaImage settingKey="comic.firstPageIcon" />}
            </Link>
        </div>
        <div className={classes.navItem}>
            <Link className={clsx(!prevArc && classes.noShow)} to={`/comic/arc/${prevArc?.url}`}>
                {["icon", "text"].includes(linkType) && <FontAwesomeIcon icon={faAngleLeft} />}
                {["text"].includes(linkType) && " Previous"}
                {["image"].includes(linkType) && <MediaImage settingKey="comic.previousPageIcon" />}
            </Link>
        </div>
        <div className={classes.navItem}>
            <Link className={clsx(!archiveArc && classes.noShow)} to={`/comic/arc/${archiveArc?.url}`}>
                {["icon"].includes(linkType) && <FontAwesomeIcon icon={faBoxArchive} />}
                {["text"].includes(linkType) && `Archives`}
                {["image"].includes(linkType) && <MediaImage settingKey="comic.archiveIcon" />}
            </Link>
        </div>
        <div className={classes.navItem}>
            <Link className={clsx(!nextArc && classes.noShow)} to={`/comic/arc/${nextArc?.url}`}>
                {["text"].includes(linkType) && " Next"}
                {["icon", "text"].includes(linkType) && <FontAwesomeIcon icon={faAngleRight} />}
                {["image"].includes(linkType) && <MediaImage settingKey="comic.nextPageIcon" />}
            </Link>
        </div>
        <div className={classes.navItem}>
            <Link className={clsx(!nextArc && classes.noShow)} to={`/comic/arc/${latestArc?.url}`}>
                {["text"].includes(linkType) && " Latest"}
                {["icon", "text"].includes(linkType) && <FontAwesomeIcon icon={faAngleDoubleRight} />}
                {["image"].includes(linkType) && <MediaImage settingKey="comic.lastPageIcon" />}
            </Link>
        </div>
    </div>
);
