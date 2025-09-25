import { createInjector, inject, mergeProps } from "unstateless";
import {ArcViewComponent} from "./ArcView.component";
import {IArcViewInputProps, ArcViewProps, IArcViewProps} from "./ArcView.d";
import { useStory } from "@comic/lib/useStory";

const injectArcViewProps = createInjector(({url}:IArcViewInputProps):IArcViewProps => {
    const story = useStory();
    
    const arc = story.arc.get(url);
    const parents = story.arc.parents(arc?.id || '');
    const subArcs = story.arc.subArcs(arc?.id);
    const pages = story.arc.pages(arc?.id);

    return {subArcs, pages, arc, parents};
});

const connect = inject<IArcViewInputProps, ArcViewProps>(mergeProps(
    injectArcViewProps,
));

export const ArcView = connect(ArcViewComponent);
