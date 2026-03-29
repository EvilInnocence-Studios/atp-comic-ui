import { ComicArcUrlContext } from "@comic/lib/context";
import { overridable } from "@core/lib/overridable";
import { Layout } from "@theming/components/Layout";
import { ArcViewProps } from "./ArcView.d";

const Provider = ComicArcUrlContext.Provider;

export const ArcViewComponent = overridable(({
    arc, isVerticalScroll, hasPages,
}: ArcViewProps) => <>
    <Provider value={arc?.url || ""}>
        {!isVerticalScroll              && <Layout element="comicArc"                   />}
        { isVerticalScroll && !hasPages && <Layout element="comicVerticalScrollArc"     />}
        { isVerticalScroll && hasPages  && <Layout element="comicVerticalScrollEpisode" />}
    </Provider>
</>);
