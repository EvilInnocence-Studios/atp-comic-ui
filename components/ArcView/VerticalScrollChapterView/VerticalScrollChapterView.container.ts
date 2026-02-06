import { createInjector, inject, mergeProps } from "unstateless";
import {VerticalScrollChapterViewComponent} from "./VerticalScrollChapterView.component";
import {IVerticalScrollChapterViewInputProps, VerticalScrollChapterViewProps, IVerticalScrollChapterViewProps} from "./VerticalScrollChapterView.d";
import { overridable } from "@core/lib/overridable";
import { useStory } from "@comic/lib/useStory";
import { IComicUserPreferences, injectUserPreferences } from "@comic/lib/useUserPreferences";

const injectVerticalScrollChapterViewProps = createInjector(({arcId, archive:{sortOrder}}:IVerticalScrollChapterViewInputProps & IComicUserPreferences):IVerticalScrollChapterViewProps => {
    const story = useStory();
    const arc = story.arc.getById(arcId);
    let chapters = story.arc.leafArcs(arcId).filter(a => !!a && a.id !== arcId);
    if (sortOrder === "desc") chapters.reverse();
    return {arc, chapters};
});

const connect = inject<IVerticalScrollChapterViewInputProps, VerticalScrollChapterViewProps>(mergeProps(
    injectUserPreferences,
    injectVerticalScrollChapterViewProps,
));
export const connectVerticalScrollChapterView = connect;

export const VerticalScrollChapterView = overridable<IVerticalScrollChapterViewInputProps>(connect(VerticalScrollChapterViewComponent));
