import { ComicImage } from "@comic/components/ComicImage";
import { overridable } from "@core/lib/overridable";
import { Link } from "react-router";
import { ArcPagesProps } from "./ArcPages.d";
import styles from './ArcPages.module.scss';

export const ArcPagesComponent = overridable(({ pages, classes = styles }: ArcPagesProps) => <>
    {pages.length > 0 && <div className={classes.arcPages}>
        {pages.map(page =>
            <div className={classes.listItem} key={page.id}>
                <Link to={`/comic/page/${page.url}`}>
                    <ComicImage fileName={page.imageUrl || ""} className={classes.thumbnail} />
                    <div className={classes.title}>{page.name}</div>
                </Link>
            </div>
        )}
    </div>}
</>
);
