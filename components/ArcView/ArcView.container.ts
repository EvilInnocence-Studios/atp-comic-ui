import { createInjector, inject, mergeProps } from "unstateless";
import {ArcViewComponent} from "./ArcView.component";
import {IArcViewInputProps, ArcViewProps, IArcViewProps, BreadCrumbMode} from "./ArcView.d";
import { useStory } from "@comic/lib/useStory";
import { useSetting } from "@common/lib/setting/services";
import { useState } from "react";

const injectArcViewProps = createInjector(({url}:IArcViewInputProps):IArcViewProps => {
    const story = useStory();
    
    const arc = story.arc.get(url);
    const parents = story.arc.parents(arc?.id || '');
    const subArcs = story.arc.subArcs(arc?.id);
    const pages = story.arc.pages(arc?.id);

    const showDetails = useSetting("comic.showArchiveDetails") === "true";
    const showBanner = useSetting("comic.showArchiveBanner") === "true";
    const showViewModeToggle = useSetting("comic.showArchiveViewModeToggle") === "true";
    const breadCrumbMode = (useSetting("comic.archiveBreadCrumbMode") || "full") as BreadCrumbMode;

    const hasNoBreadcrumbs = breadCrumbMode === "none" || (breadCrumbMode === "parent" && parents.length === 0);
    const showBar = (showViewModeToggle && subArcs.length > 0) || !hasNoBreadcrumbs;
    const showDivider = !showBanner && !showBar;

    const subPages = story.arc.allPages;
    const pageNumber = story.page.pageNumber;
    const arcTypeName = story.arc.typeName;

    const defaultMode = useSetting("comic.defaultArcView");
    const [mode, setMode] = useState<string>(defaultMode || "list");

    return {
        subArcs, pages,
        subPages, pageNumber, arcTypeName,
        arc, parents,
        mode, setMode,
        showDetails, showBanner, showViewModeToggle, breadCrumbMode, showBar, showDivider,
    };
});

const connect = inject<IArcViewInputProps, ArcViewProps>(mergeProps(
    injectArcViewProps,
));

export const ArcView = connect(ArcViewComponent);
