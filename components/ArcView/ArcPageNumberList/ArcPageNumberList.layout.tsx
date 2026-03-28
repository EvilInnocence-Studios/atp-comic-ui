import { ILayoutEditorProps, LayoutEditor } from "@theming/lib/layout/componentRegistry";
import { range } from "ts-functional";

export const ArcPageNumberListLayoutEditor:LayoutEditor = ({css, className}:ILayoutEditorProps) => <>
    {css && <style>{css}</style>}
    <ul className={className}>
        {range(1, 50).map(i => <li key={i}><a href="">{i}</a></li>)}
    </ul>
</>;
