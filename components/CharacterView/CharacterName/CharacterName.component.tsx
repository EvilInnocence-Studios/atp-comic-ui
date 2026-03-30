import { overridable } from "@core/lib/overridable";
import {CharacterNameProps} from "./CharacterName.d";
import styles from './CharacterName.module.scss';

export const CharacterNameComponent = overridable(({classes = styles, slots, __layoutId, className, css}:CharacterNameProps) => <>
    {css && <style>{css}</style>}
    <div className={className}>CharacterName component goes here.</div>
</>);

