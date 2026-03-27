import { ILayoutEditorProps, LayoutEditor } from "@theming/lib/layout/componentRegistry";

import img from "./arc-banner-placeholder.png";

export const ArcBannerLayoutEditor:LayoutEditor = ({css, className}:ILayoutEditorProps) => <>
    {css && <style>{css}</style>}
    <img className={className} src={img} alt="Arc Banner" />
</>;
