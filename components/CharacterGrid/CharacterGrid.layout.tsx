import { CharacterGridComponent } from "./CharacterGrid.component";
import { connectCharacterGrid } from "./CharacterGrid.container";
import { ILayoutEditorProps, LayoutEditor } from "@theming/lib/layout/componentRegistry";

export const CharacterGridLayoutEditor:LayoutEditor = ({css, className, ...props}:ILayoutEditorProps) => {
    const CharacterGridOrig = connectCharacterGrid(CharacterGridComponent);

    return <>
        {css && <style>{css}</style>}
        <div className={className}>
             <CharacterGridOrig {...props} />
        </div>
    </>;
};
