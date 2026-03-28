import { ArcDateComponent } from "./ArcDate.component";
import { connectArcDate } from "./ArcDate.container";
import { ILayoutEditorProps, LayoutEditor } from "@theming/lib/layout/componentRegistry";

export const ArcDateLayoutEditor:LayoutEditor = ({css, className, ...props}:ILayoutEditorProps) => {
    const ArcDateOrig = connectArcDate(ArcDateComponent);

    return <>
        {css && <style>{css}</style>}
        <div className={className}>
             <ArcDateOrig {...props} />
        </div>
    </>;
};
