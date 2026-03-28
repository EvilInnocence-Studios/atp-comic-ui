import { ILayoutEditorProps, LayoutEditor } from "@theming/lib/layout/componentRegistry";
import { Layout } from "@theming/components/Layout";

export const SubArcListLayoutEditor:LayoutEditor = ({css, className, mode}:ILayoutEditorProps) => <>
    {css && <style>{css}</style>}
    <div className={className}>
        <Layout element={mode || "comicArcListItem"} __fixed />
        <Layout element={mode || "comicArcListItem"} __fixed />
        <Layout element={mode || "comicArcListItem"} __fixed />
        <Layout element={mode || "comicArcListItem"} __fixed />
        <Layout element={mode || "comicArcListItem"} __fixed />
    </div>
</>;
