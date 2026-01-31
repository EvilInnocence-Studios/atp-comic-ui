import { ComicImage } from "@comic/components/ComicImage";
import { overridable } from "@core/lib/overridable";
import { Link } from "react-router";
import { ArcPagesProps } from "./ArcPages.d";
import styles from './ArcPages.module.scss';
import { ArcNav } from "@comic/components/ArcNav";

export const ArcPagesComponent = overridable(({ pages, arc, isVerticalScroll, classes = styles }: ArcPagesProps) => <>
    {pages.length > 0 && !isVerticalScroll && <div className={classes.arcPages}>
        {pages.map(page =>
            <div className={classes.listItem} key={page.id}>
                <Link to={`/comic/page/${page.url}`}>
                    <ComicImage fileName={page.imageUrl || ""} className={classes.thumbnail} />
                    <div className={classes.title}>{page.name}</div>
                </Link>
            </div>
        )}
    </div>}
    {pages.length > 0 && isVerticalScroll && <div className={classes.arcPagesVertical}>
        <ArcNav arc={arc} top />
        {pages.map(page =>
            <div className={classes.listItem} key={page.id}>
                <ComicImage fileName={page.imageUrl || ""} className={classes.thumbnail} />
            </div>
        )}
        <ArcNav arc={arc} bottom />
    </div>}
</>
);
