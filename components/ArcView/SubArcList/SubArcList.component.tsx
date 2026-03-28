import { ComicArcUrlContext } from "@comic/lib/context";
import { overridable } from "@core/lib/overridable";
import { Layout } from "@theming/components/Layout";
import { SubArcListProps } from "./SubArcList";

const Provider = ComicArcUrlContext.Provider;

export const SubArcListComponent = overridable(({className, css, arcs, mode}:SubArcListProps) => <>
    {css && <style>{css}</style>}
    <div className={className}>
        {arcs.map((arc) => <Provider key={arc.url} value={arc.url || ""}>
            <Layout element={mode || "comicArcListItem"} />
        </Provider>)}
    </div>
</>);

