import { overridable } from "@core/lib/overridable";
import Markdown from 'react-markdown';
import { ArchivesHeader } from "../ArchivesHeader";
import { ComicImage } from "../ComicImage";
import { ArcBreadcrumbs } from "./ArcBreadcrumbs";
import { ArcPages } from "./ArcPages";
import { ArcTitle } from "./ArcTitle";
import { ArcViewProps } from "./ArcView.d";
import styles from './ArcView.module.scss';
import { SubArcView } from "./SubArcView";
import clsx from "clsx";
import { VerticalScrollChapterView } from "./VerticalScrollChapterView";
import { Layout } from "@theming/components/Layout";
import { ComicArcUrlContext } from "@comic/lib/context";

const Provider = ComicArcUrlContext.Provider;

export const ArcViewComponent = overridable(({
    arc, className, isVerticalScroll, hasPages,
    showDetails, showBanner, classes = styles
}: ArcViewProps) => <>
    <Provider value={arc?.url || ""}>
        {!isVerticalScroll              && <Layout element="comicArc"                   />}
        { isVerticalScroll && !hasPages && <Layout element="comicVerticalScrollArc"     />}
        { isVerticalScroll && hasPages  && <Layout element="comicVerticalScrollEpisode" />}
    </Provider>
    <div className={clsx(classes.arcContainer, className)}>
        <ArchivesHeader />
        {!!arc && <>
            {showBanner && !!arc.bannerUrl && <ComicImage fileName={arc.bannerUrl} className={classes.banner} />}
            {showDetails && <div className={classes.arcDetails}>
                <h2><ArcTitle url={arc.url || ""} /></h2>
                <Markdown>{arc.summary}</Markdown>
            </div>}
            <ArcBreadcrumbs url={arc.url} />
            {isVerticalScroll ? <VerticalScrollChapterView arcId={arc.id} /> : <SubArcView arcId={arc.id} />}
            <ArcPages url={arc.url} />
        </>}
    </div>
</>);
