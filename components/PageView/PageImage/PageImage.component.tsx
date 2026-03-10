import { overridable } from "@core/lib/overridable";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { ComicImage } from "../../ComicImage";
import { PageImageProps } from "./PageImage.d";
import styles from './PageImage.module.scss';
import samplePage from "./sample-page.png";

export const PageImageComponent = overridable(({
    classes = styles, __layoutId, className, css,
    pageUrl, nextPage, page,
}:PageImageProps) => <>
    {css && <style>{css}</style>}
    <div className={clsx(classes.pageImage, className)}>
        {!!__layoutId && <img src={samplePage} />}
        {!__layoutId && page && <>
            {!!pageUrl && <Link to={`/comic/page/${pageUrl}`}><ComicImage fileName={page.imageUrl || ""} /></Link>}
            {!nextPage && <ComicImage fileName={page.imageUrl || ""} />}
        </>}
    </div>
</>);

