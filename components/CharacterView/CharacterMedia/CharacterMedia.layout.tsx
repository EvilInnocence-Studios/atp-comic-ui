import { ILayoutEditorProps, LayoutEditor } from "@theming/lib/layout/componentRegistry";

import src from "./media-thumbnail-placeholder.png";

export const CharacterMediaLayoutEditor:LayoutEditor = ({css, className}:ILayoutEditorProps) => <>
        {css && <style>{css}</style>}
        <div className={className}>
            <img src={src} />
            <img src={src} />
            <img src={src} />
            <img src={src} />
            <img src={src} />
        </div>
    </>;
