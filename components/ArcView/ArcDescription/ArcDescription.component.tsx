import { overridable } from "@core/lib/overridable";
import {ArcDescriptionProps} from "./ArcDescription.d";
import styles from './ArcDescription.module.scss';

export const ArcDescriptionComponent = overridable(({classes = styles, slots, __layoutId, className, css, name}:ArcDescriptionProps) => <>
    {css && <style>{css}</style>}
    <div className={className}>ArcDescription component goes here.</div>
</>);

