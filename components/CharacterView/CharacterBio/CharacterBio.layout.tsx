import { ILayoutEditorProps, LayoutEditor } from "@theming/lib/layout/componentRegistry";
import Markdown from "react-markdown";

export const CharacterBioLayoutEditor:LayoutEditor = ({css, className}:ILayoutEditorProps) => {
    return <>
        {css && <style>{css}</style>}
        <div className={className}>
             <Markdown>The character bio goes here. The character bio goes here. The character bio goes here. The character bio goes here. The character bio goes here. The character bio goes here. The character bio goes here. The character bio goes here. The character bio goes here. </Markdown>
        </div>
    </>;
};
