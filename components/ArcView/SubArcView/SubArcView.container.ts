import { useStory } from "@comic/lib/useStory";
import { IComicUserPreferences, injectUserPreferences } from "@comic/lib/useUserPreferences";
import { overridable } from "@core/lib/overridable";
import { createInjector, inject, mergeProps } from "unstateless";
import { SubArcGridComponent, SubArcListComponent } from "./SubArcView.component";
import { ISubArcViewInputProps, ISubArcViewProps, SubArcViewProps } from "./SubArcView.d";

const injectSubArcGridProps = createInjector(({arcId, archive:{sortOrder}}:ISubArcViewInputProps & IComicUserPreferences):ISubArcViewProps => {
    const story = useStory();

    const subArcs = story.arc.subArcs(arcId).sort((a, b) => sortOrder === "asc"
        ? a.sortOrder - b.sortOrder
        : b.sortOrder - a.sortOrder
    );

    const subPages = story.arc.allPages;
    const pageNumber = story.page.pageNumber;

    const isVerticalScroll = !!arcId && story.arc.isVerticalScroll(arcId);

    return {subArcs, subPages, pageNumber, isVerticalScroll};
});

const connect = inject<ISubArcViewInputProps, SubArcViewProps>(mergeProps(
    injectUserPreferences,
    injectSubArcGridProps,
));

export const SubArcGrid = overridable<ISubArcViewInputProps>(connect(SubArcGridComponent));
export const SubArcList = overridable<ISubArcViewInputProps>(connect(SubArcListComponent));

export const connectSubArcView = connect;