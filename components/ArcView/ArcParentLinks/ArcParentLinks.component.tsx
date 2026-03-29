import { ComicArcUrlContext } from "@comic/lib/context";
import { overridable } from "@core/lib/overridable";
import { Link } from "react-router";
import { ArcTitle } from "../ArcTitle";
import { ArcParentLinksProps } from "./ArcParentLinks.d";

const Provider = ComicArcUrlContext.Provider;

export const ArcParentLinksComponent = overridable(({className, css, parents, full}:ArcParentLinksProps) => <>
    {css && <style>{css}</style>}
    <ul className={className}>
        {parents.map(parent => (
            <li key={parent.id}>
                <Link to={`/comic/arc/${parent.url}`}>
                    <Provider value={parent.url}><ArcTitle full={full} /></Provider>
                </Link>
            </li>
        ))}
    </ul>
</>);

