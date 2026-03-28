import { overridable } from "@core/lib/overridable";
import {SubArcListProps} from "./SubArcList.d";
import { ComicArcUrlContext } from "@comic/lib/context";
import { Layout } from "@theming/components/Layout";

const Provider = ComicArcUrlContext.Provider;

export const SubArcListComponent = overridable(({className, css, arcs, mode}:SubArcListProps) => <>
    {css && <style>{css}</style>}
    <div className={className}>
        {arcs.map((arc) => <Provider key={arc.url} value={arc.url || ""}>
            <Layout element={mode || "comicArcListItem"} />
        </Provider>)}
    </div>
</>);

