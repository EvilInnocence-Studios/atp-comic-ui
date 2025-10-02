import { createInjector, inject, mergeProps } from "unstateless";
import {ArcViewComponent} from "./ArcView.component";
import {IArcViewInputProps, ArcViewProps, IArcViewProps} from "./ArcView.d";
import { useStory } from "@comic/lib/useStory";
import { useSetting } from "@common/lib/setting/services";
import { useState } from "react";

const injectArcViewProps = createInjector(({url}:IArcViewInputProps):IArcViewProps => {
    const story = useStory();
    
    const arc = story.arc.get(url);
    const parents = story.arc.parents(arc?.id || '');
    const subArcs = story.arc.subArcs(arc?.id);
    const pages = story.arc.pages(arc?.id);
    const subPages = story.arc.allPages;
    const pageNumber = story.page.pageNumber;
    const arcTypeName = story.arc.typeName;

    const defaultMode = useSetting("comic.defaultArcView");
    const [mode, setMode] = useState<string>(defaultMode || "list");

    return {subArcs, pages, subPages, pageNumber, arcTypeName, arc, parents, mode, setMode};
});

const connect = inject<IArcViewInputProps, ArcViewProps>(mergeProps(
    injectArcViewProps,
));

export const ArcView = connect(ArcViewComponent);
