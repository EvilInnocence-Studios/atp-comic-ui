import { IComicArc } from "@comic-shared/arc/types";
import { useStory } from "@comic/lib/useStory";
import { overridable } from "@core/lib/overridable";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import { createInjector, inject, mergeProps } from "unstateless";
import { injectArcContextProps } from "../ArcView.helpers";
import { ArcPageNumberListComponent } from "./ArcPageNumberList.component";
import { ArcPageNumberListProps, IArcPageNumberListInputProps, IArcPageNumberListProps } from "./ArcPageNumberList.d";
import { ArcPageNumberListLayoutEditor } from "./ArcPageNumberList.layout";
import { ArcPageNumberListPropEditor } from "./ArcPageNumberList.props";
import icon from './icon.svg';

const injectArcPageNumberListProps = createInjector(({arc}:IArcPageNumberListInputProps & {arc: IComicArc | null}):IArcPageNumberListProps => {
    const story = useStory();
    
    const pages = story.arc.allPages(arc?.id);
    const pageNumber = story.page.pageNumber;

    return {pages, pageNumber};
});

const connect = inject<IArcPageNumberListInputProps, ArcPageNumberListProps>(mergeProps(
    injectArcContextProps,
    injectArcPageNumberListProps,
));
export const connectArcPageNumberList = connect;

export const ArcPageNumberList = withLayoutMetadata(
    overridable<IArcPageNumberListInputProps>(connect(ArcPageNumberListComponent)),
    {
        name: "ArcPageNumberList",
        displayName: "Arc Page Number List",
        category: "Comic",
        description: "",
        icon,
        getSlotDisplayName: (slotName, props) => props[slotName] || slotName,
        layoutEditor: ArcPageNumberListLayoutEditor,
        propEditor: ArcPageNumberListPropEditor,
    }
);
