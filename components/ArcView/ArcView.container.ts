import { createInjector, inject, mergeProps } from "unstateless";
import {ArcViewComponent} from "./ArcView.component";
import {IArcViewInputProps, ArcViewProps, IArcViewProps, BreadCrumbMode, SortOrder} from "./ArcView.d";
import { useStory } from "@comic/lib/useStory";
import { useSetting } from "@common/lib/setting/services";
import { useEffect, useState } from "react";

const injectArcViewProps = createInjector(({url}:IArcViewInputProps):IArcViewProps => {
    const defaultMode = useSetting("comic.defaultArchiveView");
    const [mode, setMode] = useState<string>(defaultMode);
    useEffect(() => {setMode(defaultMode);}, [defaultMode]);

    const defaultSortOrder = useSetting("comic.defaultArchivesSortOrder");
    const [sortOrder, setSortOrder] = useState<SortOrder>(defaultSortOrder as SortOrder);
    useEffect(() => {setSortOrder(defaultSortOrder as SortOrder);}, [defaultSortOrder]);

    const story = useStory();
    
    const arc = story.arc.get(url);
    const parents = story.arc.parents(arc?.id || '');
    const subArcs = story.arc.subArcs(arc?.id).sort((a, b) => sortOrder === "asc"
        ? a.sortOrder - b.sortOrder
        : b.sortOrder - a.sortOrder
    );
    const pages = story.arc.pages(arc?.id);

    const showDetails = useSetting("comic.showArchiveDetails") === "true";
    const showBanner = useSetting("comic.showArchiveBanner") === "true";
    const showViewModeToggle = useSetting("comic.showArchiveViewModeToggle") === "true";
    const showSortOrderToggle = useSetting("comic.showArchiveSortOrderToggle") === "true";
    const breadCrumbMode = (useSetting("comic.archiveBreadCrumbMode") || "full") as BreadCrumbMode;

    const hasNoBreadcrumbs = breadCrumbMode === "none" || (breadCrumbMode === "parent" && parents.length === 0);
    const showBar = (showViewModeToggle && subArcs.length > 0) || !hasNoBreadcrumbs || (showSortOrderToggle && subArcs.length > 0);
    const showDivider = !showBanner && !showBar;

    const subPages = story.arc.allPages;
    const pageNumber = story.page.pageNumber;
    const arcTypeName = story.arc.typeName;
    const arcNumber = story.arc.arcNumber;

    return {
        subArcs, pages,
        subPages, pageNumber, arcTypeName, arcNumber,
        arc, parents,
        mode, setMode,
        sortOrder, setSortOrder,
        showDetails, showBanner, showViewModeToggle, showSortOrderToggle, breadCrumbMode, showBar, showDivider,
    };
});

const connect = inject<IArcViewInputProps, ArcViewProps>(mergeProps(
    injectArcViewProps,
));

export const ArcView = connect(ArcViewComponent);
