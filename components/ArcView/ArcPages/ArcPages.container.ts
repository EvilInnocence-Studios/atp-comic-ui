import { useStory } from "@comic/lib/useStory";
import { overridable } from "@core/lib/overridable";
import { createInjector, inject, mergeProps } from "unstateless";
import { ArcPagesComponent } from "./ArcPages.component";
import { ArcPagesProps, IArcPagesInputProps, IArcPagesProps } from "./ArcPages.d";

const injectArcPagesProps = createInjector(({url}:IArcPagesInputProps):IArcPagesProps => {
    const story = useStory();
    
    const arc = url ? story.arc.get(url) : null;
    const pages = story.arc.pages(arc?.id);

    const isVerticalScroll = !!arc && story.arc.isVerticalScroll(arc.id);
    
    return {
        arc,
        pages,
        isVerticalScroll,
    };
});

const connect = inject<IArcPagesInputProps, ArcPagesProps>(mergeProps(
    injectArcPagesProps,
));

export const ArcPages = overridable<IArcPagesInputProps>(connect(ArcPagesComponent));
export const connectArcPages = connect;