import { ILayoutEditorProps, LayoutEditor } from "@theming/lib/layout/componentRegistry";

export const ArcDescriptionLayoutEditor:LayoutEditor = ({css, className}:ILayoutEditorProps) => <>
    {css && <style>{css}</style>}
    <div className={className}>
        Arc description goes here.  Arc description goes here.  Arc description goes here.  Arc description goes here.  Arc description goes here.  Arc description goes here.  Arc description goes here.  Arc description goes here.  Arc description goes here.  
    </div>
</>;
