import { useStory } from "@comic/lib/useStory";
import { IComicUserPreferences, injectUserPreferences } from "@comic/lib/useUserPreferences";
import { overridable } from "@core/lib/overridable";
import { createInjector, inject, mergeProps } from "unstateless";
import { ArcViewComponent } from "./ArcView.component";
import { ArcViewProps, IArcViewInputProps, IArcViewProps } from "./ArcView.d";
import { injectArcSettings } from "./ArcView.helpers";

const injectArcViewProps = createInjector(({url, archive:{sortOrder}}:IArcViewInputProps & IComicUserPreferences):IArcViewProps => {
    const story = useStory();
    
    const arc = story.arc.get(url);
    const parents = story.arc.parents(arc?.id || '');
    const subArcs = story.arc.subArcs(arc?.id).sort((a, b) => sortOrder === "asc"
        ? a.sortOrder - b.sortOrder
        : b.sortOrder - a.sortOrder
    );

    return {
        parents,
        subArcs,
        arc,
    };
});

const connect = inject<IArcViewInputProps, ArcViewProps>(mergeProps(
    injectUserPreferences,
    injectArcViewProps,
    injectArcSettings,
));

export const ArcView = overridable<IArcViewInputProps>(connect(ArcViewComponent));
