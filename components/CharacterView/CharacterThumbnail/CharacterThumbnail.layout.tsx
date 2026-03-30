import { ILayoutEditorProps, LayoutEditor } from "@theming/lib/layout/componentRegistry";

import src from "./character-thumb-placeholder.png";

export const CharacterThumbnailLayoutEditor:LayoutEditor = ({css, className}:ILayoutEditorProps) => {
    return <>
        {css && <style>{css}</style>}
        <img src={src} className={className} />
    </>;
};
