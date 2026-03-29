import { ILayoutEditorProps, LayoutEditor } from "@theming/lib/layout/componentRegistry";

export const ArcTitleLayoutEditor:LayoutEditor = ({
    css, className, full,
}:ILayoutEditorProps) => <>
   {css && <style>{css}</style>}
    <span className={className}>
        {full && <>Book 5: </>}
        Arc Title Goes Here
    </span>
</>;
