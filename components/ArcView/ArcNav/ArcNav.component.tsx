import { overridable } from "@core/lib/overridable";
import {ArcNavProps} from "./ArcNav.d";
import styles from './ArcNav.module.scss';
import clsx from "clsx";
import { Link } from "react-router-dom";
import { SlotRenderer } from "@theming/components/SlotRenderer";

export const ArcNavComponent = overridable(({
    classes = styles, slots, __layoutId, className, css,
    top, bottom, prevArc, nextArc, firstArc, latestArc, archiveArc,
}:ArcNavProps) => <>
    {css && <style>{css}</style>}
    <div className={clsx(classes.comicNavLinksContainer, top && classes.top, bottom && classes.bottom, className)}>
        <div className={classes.navItem}>
            <Link className={clsx(!prevArc && classes.noShow)} to={`/comic/arc/${(firstArc?.url)}`}>
                <SlotRenderer slots={slots?.firstArc} parentId={__layoutId} slotName="firstArc" />
            </Link>
        </div>
        <div className={classes.navItem}>
            <Link className={clsx(!prevArc && classes.noShow)} to={`/comic/arc/${prevArc?.url}`}>
                <SlotRenderer slots={slots?.prevArc} parentId={__layoutId} slotName="prevArc" />
            </Link>
        </div>
        <div className={classes.navItem}>
            <Link className={clsx(!archiveArc && classes.noShow)} to={`/comic/arc/${archiveArc?.url}`}>
                <SlotRenderer slots={slots?.arc} parentId={__layoutId} slotName="arc" />
            </Link>
        </div>
        <div className={classes.navItem}>
            <Link className={clsx(!nextArc && classes.noShow)} to={`/comic/arc/${nextArc?.url}`}>
                <SlotRenderer slots={slots?.nextArc} parentId={__layoutId} slotName="nextArc" />
            </Link>
        </div>
        <div className={classes.navItem}>
            <Link className={clsx(!nextArc && classes.noShow)} to={`/comic/arc/${latestArc?.url}`}>
                <SlotRenderer slots={slots?.lastArc} parentId={__layoutId} slotName="lastArc" />
            </Link>
        </div>
    </div>
</>);

