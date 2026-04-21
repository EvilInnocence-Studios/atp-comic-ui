import { ILayoutEditorProps, LayoutEditor } from "@theming/lib/layout/componentRegistry";

export const ArcTranscriptLayoutEditor:LayoutEditor = ({css, className}:ILayoutEditorProps) => <>
    {css && <style>{css}</style>}
    <div className={className}>
        Arc transcript goes here.  Arc transcript goes here.  Arc transcript goes here.  Arc transcript goes here.  Arc transcript goes here.  Arc transcript goes here.  
    </div>
</>;
