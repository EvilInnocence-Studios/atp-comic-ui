import { overridable } from "@core/lib/overridable";
import { CharacterAttributesProps } from "./CharacterAttributes.d";

export const CharacterAttributesComponent = overridable(({className, css, attributes}:CharacterAttributesProps) => <>
    {css && <style>{css}</style>}
    <table className={className || "test"}>
        {attributes.map(attr =>
            <tr key={attr.id}>
                <th>{attr.name}:</th>
                <td>{attr.value}</td>
            </tr>
        )}
    </table>
</>);

