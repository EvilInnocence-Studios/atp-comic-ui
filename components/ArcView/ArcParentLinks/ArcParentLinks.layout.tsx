import { ILayoutEditorProps, LayoutEditor } from "@theming/lib/layout/componentRegistry";
import { Link } from "react-router";

export const ArcParentLinksLayoutEditor:LayoutEditor = ({css, className, full, show = "all"}:ILayoutEditorProps) => {
    return <>
        {css && <style>{css}</style>}
        <ul className={className}>
            {["parent", "root"].includes(show) && <li>
                <Link to="">
                    {full && <>Book 5: </>}Parent Name Goes Here
                </Link>
            </li>}
            {["all"].includes(show) && <>
                <li>
                    <Link to="">
                        {full && <>Book 5: </>}Parent Name Goes Here
                    </Link>
                </li>
                <li>
                    <Link to="">
                        {full && <>Book 5: </>}Parent Name Goes Here
                    </Link>
                </li>
                <li>
                    <Link to="">
                        {full && <>Book 5: </>}Parent Name Goes Here
                    </Link>
                </li>
                <li>
                    <Link to="">
                        {full && <>Book 5: </>}Parent Name Goes Here
                    </Link>
                </li>
            </>}
        </ul>
    </>;
};
