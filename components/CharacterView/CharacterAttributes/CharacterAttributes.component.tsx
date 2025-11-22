import { overridable } from "@core/lib/overridable";
import { CharacterAttributesProps } from "./CharacterAttributes.d";
import styles from './CharacterAttributes.module.scss';

export const CharacterAttributesComponent = overridable(({ attributes, classes = styles }: CharacterAttributesProps) =>
    <table className={classes.characterAttributes}>
        {attributes.map(attr =>
            <tr key={attr.id}>
                <th>{attr.name}:</th>
                <td>{attr.value}</td>
            </tr>
        )}
    </table>
);
