import { ILayoutEditorProps, LayoutEditor } from "@theming/lib/layout/componentRegistry";
import clsx from "clsx";
import { Link } from "react-router";
import classes from "./ArcPages.module.scss";

import samplePage from "@comic/components/PageView/PageImage/sample-page.png";
import { range } from "ts-functional";

export const ArcPagesLayoutEditor:LayoutEditor = ({css, className}:ILayoutEditorProps) => <>
    {css && <style>{css}</style>}
    <div className={clsx(classes.arcPages, className)}>
        {range(0, 10).map(i => <div key={i} className={classes.listItem}>
            <Link to="">
                <img src={samplePage} />
                <div className={classes.title}>Page Name</div>
            </Link>
        </div>)}
    </div>
</>;
