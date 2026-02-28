import { MediaImage } from "@common/components/MediaImage";
import { overridable } from "@core/lib/overridable";
import { faAngleDoubleLeft, faAngleDoubleRight, faAngleLeft, faAngleRight, faBoxArchive } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { Link } from "react-router";
import { ComicImage } from "../ComicImage";
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
            {firstArc && prevArc && <Link to={`/comic/arc/${(firstArc.url)}`}>
                {["icon", "text"].includes(linkType) && <FontAwesomeIcon icon={faAngleDoubleLeft} />}
                {["text"].includes(linkType) && " First"}
                {["image"].includes(linkType) && <MediaImage settingKey="comic.firstPageIcon" />}
            </Link>}
            {firstArc && firstArc.thumbnailUrl && <ComicImage className={classes.noShow} fileName={firstArc.thumbnailUrl} />}
        </div>
        <div className={classes.navItem}>
            {prevArc && <Link to={`/comic/arc/${prevArc.url}`}>
                {["icon", "text"].includes(linkType) && <FontAwesomeIcon icon={faAngleLeft} />}
                {["text"].includes(linkType) && " Previous"}
                {["image"].includes(linkType) && <MediaImage settingKey="comic.previousPageIcon" />}
            </Link>}
            {prevArc && prevArc.thumbnailUrl && <ComicImage className={classes.noShow} fileName={prevArc.thumbnailUrl} />}
        </div>
        <div className={classes.navItem}>
            {archiveArc && <Link to={`/comic/arc/${archiveArc.url}`}>
                {["icon"].includes(linkType) && <FontAwesomeIcon icon={faBoxArchive} />}
                {["text"].includes(linkType) && `Archives`}
                {["image"].includes(linkType) && <MediaImage settingKey="comic.archiveIcon" />}
            </Link>}
            {archiveArc && archiveArc.thumbnailUrl && <ComicImage className={classes.noShow} fileName={archiveArc.thumbnailUrl} />}
        </div>
        <div className={classes.navItem}>
            {nextArc && <Link to={`/comic/arc/${nextArc.url}`}>
                {["text"].includes(linkType) && " Next"}
                {["icon", "text"].includes(linkType) && <FontAwesomeIcon icon={faAngleRight} />}
                {["image"].includes(linkType) && <MediaImage settingKey="comic.nextPageIcon" />}
            </Link>}
            {nextArc && nextArc.thumbnailUrl && <ComicImage className={classes.noShow} fileName={nextArc.thumbnailUrl} />}
        </div>
        <div className={classes.navItem}>
            {latestArc && nextArc && <Link to={`/comic/arc/${latestArc.url}`}>
                {["text"].includes(linkType) && " Latest"}
                {["icon", "text"].includes(linkType) && <FontAwesomeIcon icon={faAngleDoubleRight} />}
                {["image"].includes(linkType) && <MediaImage settingKey="comic.lastPageIcon" />}
            </Link>}
            {latestArc && latestArc.thumbnailUrl && <ComicImage className={classes.noShow} fileName={latestArc.thumbnailUrl} />}
        </div>
    </div>
);
