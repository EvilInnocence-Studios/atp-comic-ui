import { ILayoutEditorProps } from "@theming/lib/layout/componentRegistry";
import clsx from "clsx";
import samplePage from "./sample-page.png";

export const PageImageLayoutEditor = ({
    css, classes, className, 
}:ILayoutEditorProps) => <>
    {css && <style>{css}</style>}
    <div className={clsx(classes.pageImage, className)}>
        <img src={samplePage} />
    </div>
</>
