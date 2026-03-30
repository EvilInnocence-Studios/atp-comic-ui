import { ILayoutEditorProps, LayoutEditor } from "@theming/lib/layout/componentRegistry";

export const CharacterAttributesLayoutEditor:LayoutEditor = ({css, className}:ILayoutEditorProps) => <>
    {css && <style>{css}</style>}
    <table className={className}>
        <tr>
            <th>Height</th><td>5'10"</td>
        </tr>
        <tr>
            <th>Weight</th><td>160 lbs</td>
        </tr>
        <tr>
            <th>Hair</th><td>Black</td>
        </tr>
        <tr>
            <th>Eyes</th><td>Blue</td>
        </tr>
        <tr>
            <th>Species</th><td>Human</td>
        </tr>
        <tr>
            <th>Gender</th><td>Male</td>
        </tr>
        <tr>
            <th>Age</th><td>25</td>
        </tr>
    </table>
</>;
