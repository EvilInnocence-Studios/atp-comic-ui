import { overridable } from "@core/lib/overridable";
import {EpisodeImagesProps} from "./EpisodeImages.d";
import styles from './EpisodeImages.module.scss';
import { ComicImage } from "@comic/components/ComicImage";

export const EpisodeImagesComponent = overridable(({classes = styles, className, css, pages}:EpisodeImagesProps) => <>
    {css && <style>{css}</style>}
    <div className={className}>
        {pages.map(page =>
            <div className={classes.listItem} key={page.id}>
                <ComicImage fileName={page.imageUrl || ""} className={classes.thumbnail} />
            </div>
        )}
    </div>
</>);

