import { overridable } from "@core/lib/overridable";
import {ArchivePageProps} from "./ArchivePage.d";
import styles from './ArchivePage.module.scss';

export const ArchivePageComponent = overridable(({classes = styles, slots, __layoutId, className, css}:ArchivePageProps) => <>
    {css && <style>{css}</style>}
    <div className={className}>ArchivePage component goes here.</div>
</>);

