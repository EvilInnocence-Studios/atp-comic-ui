import { ILayoutEditorProps, LayoutEditor } from "@theming/lib/layout/componentRegistry";

export const ArcTitleLayoutEditor:LayoutEditor = ({
    css, className,
}:ILayoutEditorProps) => <>
   {css && <style>{css}</style>}
    <span className={className}>
        Arc Title Goes Here
    </span>
</>;
