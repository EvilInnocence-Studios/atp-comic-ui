import { faAngleDoubleLeft, faAngleDoubleRight, faAngleLeft, faAngleRight, faBoxArchive } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import { ComicImage } from "../ComicImage";
import { PageNavProps } from "./PageNav.d";
import styles from './PageNav.module.scss';
import clsx from "clsx";
import { MediaImage } from "@common/components/MediaImage";
import { overridable } from "@core/lib/overridable";

export const PageNavComponent = overridable(({
    firstPage, prevPage, lastPage, nextPage,
    arc,
    top, bottom,
    linkType,
    classes = styles
}: PageNavProps) =>
    <div className={clsx([classes.comicNavLinksContainer, top && classes.top, bottom && classes.bottom])} style={{ textAlign: "center", fontSize: "x-large" }}>
        <div>
            {firstPage && prevPage && <Link to={`/comic/page/${(firstPage.url)}`}>
                {["icon", "text"].includes(linkType) && <FontAwesomeIcon icon={faAngleDoubleLeft} />}
                {["text"].includes(linkType) && " First"}
                {["image"].includes(linkType) && <MediaImage settingKey="comic.firstPageIcon" />}
            </Link>}
            {firstPage && firstPage.imageUrl && <ComicImage className={classes.noShow} fileName={firstPage.imageUrl} />}
        </div>
        <div>
            {prevPage && <Link to={`/comic/page/${prevPage.url}`}>
                {["icon", "text"].includes(linkType) && <FontAwesomeIcon icon={faAngleLeft} />}
                {["text"].includes(linkType) && " Previous"}
                {["image"].includes(linkType) && <MediaImage settingKey="comic.previousPageIcon" />}
            </Link>}
            {prevPage && prevPage.imageUrl && <ComicImage className={classes.noShow} fileName={prevPage.imageUrl} />}
        </div>
        {arc && <div><Link to={`/comic/arc/${arc.url}`}>
            {["icon"].includes(linkType) && <FontAwesomeIcon icon={faBoxArchive} />}
            {["text"].includes(linkType) && `Archives`}
            {["image"].includes(linkType) && <MediaImage settingKey="comic.archiveIcon" />}
        </Link></div>}
        <div>
            {nextPage && <Link to={`/comic/page/${nextPage.url}`}>
                {["text"].includes(linkType) && " Next"}
                {["icon", "text"].includes(linkType) && <FontAwesomeIcon icon={faAngleRight} />}
                {["image"].includes(linkType) && <MediaImage settingKey="comic.nextPageIcon" />}
            </Link>}
            {nextPage && nextPage.imageUrl && <ComicImage className={classes.noShow} fileName={nextPage.imageUrl} />}
        </div>
        <div>
            {lastPage && nextPage && <Link to={`/comic/page/${lastPage.url}`}>
                {["text"].includes(linkType) && " Last"}
                {["icon", "text"].includes(linkType) && <FontAwesomeIcon icon={faAngleDoubleRight} />}
                {["image"].includes(linkType) && <MediaImage settingKey="comic.lastPageIcon" />}
            </Link>}
            {lastPage && lastPage.imageUrl && <ComicImage className={classes.noShow} fileName={lastPage.imageUrl} />}
        </div>
    </div>
);
