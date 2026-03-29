import { overridable } from "@core/lib/overridable";
import {PageNavProps} from "./PageNav.d";
import styles from './PageNav.module.scss';
import clsx from "clsx";
import { Link } from "react-router-dom";
import { SlotRenderer } from "@theming/components/SlotRenderer";

export const PageNavComponent = overridable(({
    classes = styles, slots, __layoutId, name, className, css,
    top, bottom, prevPage, nextPage, firstPage, lastPage, arc,
}:PageNavProps) => <>
    {css && <style>{css}</style>}
    <div className={clsx(classes.comicNavLinksContainer, top && classes.top, bottom && classes.bottom, className)}>
        <div className={classes.navItem}>
            <Link className={clsx(!prevPage && classes.noShow)} to={`/comic/page/${(firstPage?.url)}`}>
                <SlotRenderer slots={slots?.firstPage} parentId={__layoutId} slotName="firstPage" componentName={name} />
            </Link>
        </div>
        <div className={classes.navItem}>
            <Link className={clsx(!prevPage && classes.noShow)} to={`/comic/page/${prevPage?.url}`}>
                <SlotRenderer slots={slots?.prevPage} parentId={__layoutId} slotName="prevPage" componentName={name} />
            </Link>
        </div>
        <div className={classes.navItem}>
            <Link className={clsx(!arc && classes.noShow)} to={`/comic/arc/${arc?.url}`}>
                <SlotRenderer slots={slots?.arc} parentId={__layoutId} slotName="arc" componentName={name} />
            </Link>
        </div>
        <div className={classes.navItem}>
            <Link className={clsx(!nextPage && classes.noShow)} to={`/comic/page/${nextPage?.url}`}>
                <SlotRenderer slots={slots?.nextPage} parentId={__layoutId} slotName="nextPage" componentName={name} />
            </Link>
        </div>
        <div className={classes.navItem}>
            <Link className={clsx(!nextPage && classes.noShow)} to={`/comic/page/${lastPage?.url}`}>
                <SlotRenderer slots={slots?.lastPage} parentId={__layoutId} slotName="lastPage" componentName={name} />
            </Link>
        </div>
    </div>
</>);
