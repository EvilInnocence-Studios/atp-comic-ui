import { IComicArc } from "@comic-shared/arc/types";
import { useStory } from "@comic/lib/useStory";
import { overridable } from "@core/lib/overridable";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import { createInjector, inject, mergeProps } from "unstateless";
import { injectArcContextProps } from "@comic/lib/context";
import icon from './icon.svg';
import { SubArcListComponent } from "./SubArcList.component";
import { ISubArcListInputProps, ISubArcListProps, SubArcListProps } from "./SubArcList.d";
import { SubArcListLayoutEditor } from "./SubArcList.layout";
import { SubArcListPropEditor } from "./SubArcList.props";
import { IComicUserPreferences, injectUserPreferences } from "@comic/lib/useUserPreferences";

const injectSubArcListProps = createInjector((
    {arc, depth, archive:{sortOrder}}:{arc:IComicArc | null} & ISubArcListInputProps & IComicUserPreferences):ISubArcListProps => {
    const story = useStory();
    let arcs = depth === "leaves"
        ? story.arc.leafArcs(arc?.id || "")
        : story.arc.subArcs(arc?.id || "");
    
    if (sortOrder === "desc") {
        arcs = [...arcs].reverse();
    }

    return {arcs};
});

const connect = inject<ISubArcListInputProps, SubArcListProps>(mergeProps(
    injectUserPreferences,
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
        subCategory: "Arc",
        description: "",
        icon,
        getSlotDisplayName: (slotName, props) => props[slotName] || slotName,
        layoutEditor: SubArcListLayoutEditor,
        propEditor: SubArcListPropEditor,
    }
);
