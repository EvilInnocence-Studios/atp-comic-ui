import { overridable } from "@core/lib/overridable";
import {CharacterAttributesProps} from "./CharacterAttributes.d";
import styles from './CharacterAttributes.module.scss';

export const CharacterAttributesComponent = overridable(({attributes}:CharacterAttributesProps) =>
    <table className={styles.characterAttributes}>
        {attributes.map(attr =>
            <tr key={attr.id}>
                <th>{attr.name}:</th>
                <td>{attr.value}</td>
            </tr>
        )}
    </table>
);
