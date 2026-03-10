import { overridable } from "@core/lib/overridable";
import {PageNameProps} from "./PageName.d";
import styles from './PageName.module.scss';

export const PageNameComponent = overridable(({classes = styles, slots, __layoutId, className, css, page}:PageNameProps) => <>
    {css && <style>{css}</style>}
    <span className={className}>
        {!__layoutId && page?.name}
        {__layoutId && "Page Name Goes Here"}
    </span>
</>);

