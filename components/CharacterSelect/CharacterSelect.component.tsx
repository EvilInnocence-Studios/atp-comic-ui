import { overridable } from "@core/lib/overridable";
import { Select } from "antd";
import { CharacterSelectProps } from "./CharacterSelect.d";
import styles from './CharacterSelect.module.scss';

export const CharacterSelectComponent = overridable(({
    classes = styles,
    characterId,
    onChange,
    characters,
}:CharacterSelectProps) =>
    <Select
        className={classes.characterSelect}
        placeholder="Select a character"
        value={characterId}
        onChange={onChange}
        options={characters.map(c => ({ value: c.id, label: c.name }))}
    />
);
