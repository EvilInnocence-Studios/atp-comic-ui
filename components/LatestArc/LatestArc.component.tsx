import { overridable } from "@core/lib/overridable";
import {LatestArcProps} from "./LatestArc.d";
import styles from './LatestArc.module.scss';
import { ArcView } from "../ArcView";

export const LatestArcComponent = overridable(({classes = styles, className, css, latestArcUrl}:LatestArcProps) =>
    <div className={classes.latestArc}>
        {css && <style>{css}</style>}
        {latestArcUrl && <ArcView url={latestArcUrl} classes={classes} className={className}/>}
    </div>);

