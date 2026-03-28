import { IComicArc } from "@comic-shared/arc/types";
import { useStory } from "@comic/lib/useStory";
import { overridable } from "@core/lib/overridable";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import { createInjector, inject, mergeProps } from "unstateless";
import { injectArcContextProps } from "../ArcView.helpers";
import icon from './icon.svg';
import { SubArcListComponent } from "./SubArcList.component";
import { ISubArcListInputProps, ISubArcListProps, SubArcListProps } from "./SubArcList.d";
import { SubArcListLayoutEditor } from "./SubArcList.layout";
import { SubArcListPropEditor } from "./SubArcList.props";

const injectSubArcListProps = createInjector(({arc}:{arc:IComicArc | null} & ISubArcListInputProps):ISubArcListProps => {
    const story = useStory();
    const arcs = story.arc.subArcs(arc?.id || "");

    return {arcs};
});

const connect = inject<ISubArcListInputProps, SubArcListProps>(mergeProps(
    injectArcContextProps,
    injectSubArcListProps,
));
export const connectSubArcList = connect;

export const SubArcList = withLayoutMetadata(
    overridable<ISubArcListInputProps>(connect(SubArcListComponent)),
    {
        name: "SubArcList",
        displayName: "Sub Arc List",
        category: "Comic",
        description: "",
        icon,
        getSlotDisplayName: (slotName, props) => props[slotName] || slotName,
        layoutEditor: SubArcListLayoutEditor,
        propEditor: SubArcListPropEditor,
    }
);
