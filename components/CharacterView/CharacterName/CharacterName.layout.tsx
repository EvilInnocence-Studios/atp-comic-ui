import { ILayoutEditorProps, LayoutEditor } from "@theming/lib/layout/componentRegistry";

export const CharacterNameLayoutEditor:LayoutEditor = ({css, className}:ILayoutEditorProps) => <>
    {css && <style>{css}</style>}
    <span className={className}>
        Jane Doe
    </span>
</>;
