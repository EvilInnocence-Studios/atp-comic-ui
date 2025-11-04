import { overridable } from "@core/lib/overridable";
import {CharacterPageHeaderProps} from "./CharacterPageHeader.d";
import styles from './CharacterPageHeader.module.scss';

export const CharacterPageHeaderComponent = overridable<CharacterPageHeaderProps>(({}:CharacterPageHeaderProps) =>
    <h1>Characters</h1>
);
