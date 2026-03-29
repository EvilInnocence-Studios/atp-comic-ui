import { overridable } from "@core/lib/overridable";
import {ArcPagesProps} from "./ArcPages.d";
import styles from './ArcPages.module.scss';
import { Link } from "react-router";
import { ComicImage } from "@comic/components/ComicImage";
import clsx from "clsx";

export const ArcPagesComponent = overridable(({classes = styles, className, css, pages}:ArcPagesProps) => <>
    {css && <style>{css}</style>}
    {pages.length > 0 && <div className={clsx(classes.arcPages, className)}>
        {pages.map(page =>
            <div className={classes.listItem} key={page.id}>
                <Link to={`/comic/page/${page.url}`}>
                    <ComicImage fileName={page.imageUrl || ""} className={classes.thumbnail} />
                    <div className={classes.title}>{page.name}</div>
                </Link>
            </div>
        )}
    </div>}
</>);

