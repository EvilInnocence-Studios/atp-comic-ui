import { IComicArc } from "@comic-shared/arc/types";
import { useSetting } from "@common/lib/setting/services";
import { createInjector } from "unstateless";
import { BreadCrumbMode } from "./ArcView";

export declare interface IArcSettings {
    showDetails: boolean;
    showBanner: boolean;
    showViewModeToggle: boolean;
    showSortOrderToggle: boolean;
    breadCrumbMode: BreadCrumbMode;
    showBar: boolean;
}

export const useArcSettings = (parents:IComicArc[], subArcs:IComicArc[]):IArcSettings => {
    const showDetails = useSetting("comic.showArchiveDetails") === "true";
    const showBanner = useSetting("comic.showArchiveBanner") === "true";
    const showViewModeToggle = useSetting("comic.showArchiveViewModeToggle") === "true";
    const showSortOrderToggle = useSetting("comic.showArchiveSortOrderToggle") === "true";
    const breadCrumbMode = (useSetting("comic.archiveBreadCrumbMode") || "full") as BreadCrumbMode;

    const hasNoBreadcrumbs = breadCrumbMode === "none" || (breadCrumbMode === "parent" && parents.length === 0);
    const showBar = (showViewModeToggle && subArcs.length > 0) || !hasNoBreadcrumbs || (showSortOrderToggle && subArcs.length > 0);
 
    return {
        showDetails, showBanner, showViewModeToggle, showSortOrderToggle, breadCrumbMode, showBar,
    };
}

export const injectArcSettings = createInjector(({parents, subArcs}:{parents:IComicArc[], subArcs:IComicArc[]}):IArcSettings => {
    return useArcSettings(parents, subArcs);
});
