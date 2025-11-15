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

export const ArcViewComponent = overridable(({
    arc,
    showDetails, showBanner
}:ArcViewProps) => 
    <div className={styles.arcContainer}>
        <ArchivesHeader />
        {!!arc && <>
            {showBanner && !!arc.bannerUrl && <ComicImage fileName={arc.bannerUrl} className={styles.banner}/>}
            {showDetails && <div className={styles.arcDetails}>
                <h2><ArcTitle arc={arc} /></h2>
                <Markdown>{arc.summary}</Markdown>
            </div>}
            <ArcBreadcrumbs url={arc.url} />
            <SubArcView arcId={arc.id} />
            <ArcPages url={arc.url} />
        </>}
    </div>
);
