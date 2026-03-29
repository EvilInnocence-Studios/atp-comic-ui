import { useStory } from "@comic/lib/useStory";
import { overridable } from "@core/lib/overridable";
import { createInjector, inject, mergeProps } from "unstateless";
import { ArcViewComponent } from "./ArcView.component";
import { ArcViewProps, IArcViewInputProps, IArcViewProps } from "./ArcView.d";

const injectArcViewProps = createInjector(({url}:IArcViewInputProps):IArcViewProps => {
    const story = useStory();
    
    const arc = story.arc.get(url);

    const isVerticalScroll = !!arc && story.arc.isVerticalScroll(arc.id);
    const hasPages = !!arc && story.arc.pages(arc.id).length > 0;

    return {
        arc,
        isVerticalScroll,
        hasPages,
    };
});

const connect = inject<IArcViewInputProps, ArcViewProps>(mergeProps(
    injectArcViewProps,
));
export const connectArcView = connect;

export const ArcView = overridable<IArcViewInputProps>(connect(ArcViewComponent));
