import { overridable } from "@core/lib/overridable";
import { Link } from "react-router-dom";
import { ArcPageNumberListProps } from "./ArcPageNumberList.d";

export const ArcPageNumberListComponent = overridable(({className, css, pages, pageNumber}:ArcPageNumberListProps) => <>
    {css && <style>{css}</style>}
    <ul className={className}>
        {pages.map(page =>
            <li key={page.id}>
                <Link to={`/comic/page/${page.url}`} title={page.name}>
                    {pageNumber(page.id)}
                </Link>
            </li>
        )}
    </ul>
</>);

