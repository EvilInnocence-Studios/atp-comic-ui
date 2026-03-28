import { ILayoutEditorProps, LayoutEditor } from "@theming/lib/layout/componentRegistry";

import img from "./arc-thumbnail-placeholder.png";

export const ArcThumbnailLayoutEditor:LayoutEditor = ({css, className}:ILayoutEditorProps) => <>
    {css && <style>{css}</style>}
    <img className={className} src={img} alt="Arc Thumbnail" />
</>;
