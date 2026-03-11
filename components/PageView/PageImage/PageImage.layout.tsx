import { ILayoutEditorProps } from "@theming/lib/layout/componentRegistry";
import clsx from "clsx";
import samplePage from "./sample-page.png";
import styles from "./PageImage.module.scss";

export const PageImageLayoutEditor = ({
    css, classes = styles, className, 
}:ILayoutEditorProps) => <>
    {css && <style>{css}</style>}
    <div className={clsx(classes.pageImage, className)}>
        <img src={samplePage} />
    </div>
</>
