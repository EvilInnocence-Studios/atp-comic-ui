import { useStory } from "@comic/lib/useStory";
import { IComicUserPreferences, injectUserPreferences } from "@comic/lib/useUserPreferences";
import { overridable } from "@core/lib/overridable";
import { createInjector, inject, mergeProps } from "unstateless";
import { injectArcSettings } from "../ArcView.helpers";
import { ArcBreadcrumbsComponent } from "./ArcBreadcrumbs.component";
import { ArcBreadcrumbsProps, IArcBreadcrumbsInputProps, IArcBreadcrumbsProps } from "./ArcBreadcrumbs.d";

const injectArcBreadcrumbsProps = createInjector(({url, archive:{sortOrder}}:IArcBreadcrumbsInputProps & IComicUserPreferences):IArcBreadcrumbsProps => {
    const story = useStory();
    
    const arc = url ? story.arc.get(url) : null;
    const parents = story.arc.parents(arc?.id || '');
    const subArcs = story.arc.subArcs(arc?.id).sort((a, b) => sortOrder === "asc"
        ? a.sortOrder - b.sortOrder
        : b.sortOrder - a.sortOrder
    );

    return {
        arc,
        subArcs,
        parents,
    };
});

const connect = inject<IArcBreadcrumbsInputProps, ArcBreadcrumbsProps>(mergeProps(
    injectUserPreferences,
    injectArcBreadcrumbsProps,
    injectArcSettings,
));

export const ArcBreadcrumbs = overridable<IArcBreadcrumbsInputProps>(connect(ArcBreadcrumbsComponent));
export const connectArcBreadcrumbs = connect;