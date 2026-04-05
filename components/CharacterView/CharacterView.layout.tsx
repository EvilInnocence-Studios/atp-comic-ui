import { CharacterViewComponent } from "./CharacterView.component";
import { connectCharacterView } from "./CharacterView.container";
import { ILayoutEditorProps, LayoutEditor } from "@theming/lib/layout/componentRegistry";

export const CharacterViewLayoutEditor:LayoutEditor = ({css, className, ...props}:ILayoutEditorProps) => {
    const CharacterViewOrig = connectCharacterView(CharacterViewComponent);

    return <>
        {css && <style>{css}</style>}
        <div className={className}>
             <CharacterViewOrig {...props} />
        </div>
    </>;
};
