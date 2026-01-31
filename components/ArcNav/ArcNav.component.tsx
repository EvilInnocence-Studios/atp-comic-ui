import { faAngleDoubleLeft, faAngleDoubleRight, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import { ComicImage } from "../ComicImage";
import { ArcNavProps } from "./ArcNav.d";
import styles from './ArcNav.module.scss';
import clsx from "clsx";
import { MediaImage } from "@common/components/MediaImage";
import { overridable } from "@core/lib/overridable";

export const ArcNavComponent = overridable(({
    firstArc, prevArc, latestArc, nextArc,
    top, bottom,
    linkType,
    classes = styles
}: ArcNavProps) =>
    <div className={clsx([classes.comicNavLinksContainer, top && classes.top, bottom && classes.bottom])} style={{ textAlign: "center", fontSize: "x-large" }}>
        <div>
            {firstArc && prevArc && <Link to={`/comic/arc/${(firstArc.url)}`}>
                {["icon", "text"].includes(linkType) && <FontAwesomeIcon icon={faAngleDoubleLeft} />}
                {["text"].includes(linkType) && " First"}
                {["image"].includes(linkType) && <MediaImage settingKey="comic.firstPageIcon" />}
            </Link>}
            {firstArc && firstArc.thumbnailUrl && <ComicImage className={classes.noShow} fileName={firstArc.thumbnailUrl} />}
        </div>
        <div>
            {prevArc && <Link to={`/comic/arc/${prevArc.url}`}>
                {["icon", "text"].includes(linkType) && <FontAwesomeIcon icon={faAngleLeft} />}
                {["text"].includes(linkType) && " Previous"}
                {["image"].includes(linkType) && <MediaImage settingKey="comic.previousPageIcon" />}
            </Link>}
            {prevArc && prevArc.thumbnailUrl && <ComicImage className={classes.noShow} fileName={prevArc.thumbnailUrl} />}
        </div>
        <div>
            {/* Middle spacer - ArcNav doesn't have an 'Up' link equivalent to PageNav's 'Archives' link currently */}
        </div>
        <div>
            {nextArc && <Link to={`/comic/arc/${nextArc.url}`}>
                {["text"].includes(linkType) && " Next"}
                {["icon", "text"].includes(linkType) && <FontAwesomeIcon icon={faAngleRight} />}
                {["image"].includes(linkType) && <MediaImage settingKey="comic.nextPageIcon" />}
            </Link>}
            {nextArc && nextArc.thumbnailUrl && <ComicImage className={classes.noShow} fileName={nextArc.thumbnailUrl} />}
        </div>
        <div>
            {latestArc && nextArc && <Link to={`/comic/arc/${latestArc.url}`}>
                {["text"].includes(linkType) && " Latest"}
                {["icon", "text"].includes(linkType) && <FontAwesomeIcon icon={faAngleDoubleRight} />}
                {["image"].includes(linkType) && <MediaImage settingKey="comic.lastPageIcon" />}
            </Link>}
            {latestArc && latestArc.thumbnailUrl && <ComicImage className={classes.noShow} fileName={latestArc.thumbnailUrl} />}
        </div>
    </div>
);
