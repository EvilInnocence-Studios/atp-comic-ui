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

export const ArcViewComponent = overridable(({
    arc, className, isVerticalScroll,
    showDetails, showBanner, classes = styles
}: ArcViewProps) =>
    <div className={clsx(classes.arcContainer, className)}>
        <ArchivesHeader />
        {!!arc && <>
            {showBanner && !!arc.bannerUrl && <ComicImage fileName={arc.bannerUrl} className={classes.banner} />}
            {showDetails && <div className={classes.arcDetails}>
                <h2><ArcTitle arc={arc} /></h2>
                <Markdown>{arc.summary}</Markdown>
            </div>}
            <ArcBreadcrumbs url={arc.url} />
            {isVerticalScroll ? <VerticalScrollChapterView arcId={arc.id} /> : <SubArcView arcId={arc.id} />}
            <ArcPages url={arc.url} />
        </>}
    </div>
);
