import { createInjector, inject, mergeProps } from "unstateless";
import {ArcTypeComponent} from "./ArcType.component";
import {IArcTypeInputProps, ArcTypeProps, IArcTypeProps} from "./ArcType.d";
import { overridable } from "@core/lib/overridable";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import icon from './icon.svg';
import { ArcTypeLayoutEditor } from "./ArcType.layout";
import { ArcTypePropEditor } from "./ArcType.props";
import { injectArcContextProps } from "../ArcView.helpers";
import { useStory } from "@comic/lib/useStory";
import { IComicArc } from "@comic-shared/arc/types";

const injectArcTypeProps = createInjector(({arc}:IArcTypeInputProps & {arc: IComicArc | null}):IArcTypeProps => {
    const story = useStory();
    const typeName = story.arc.typeName(arc);

    return {typeName};
});

const connect = inject<IArcTypeInputProps, ArcTypeProps>(mergeProps(
    injectArcContextProps,
    injectArcTypeProps,
));
export const connectArcType = connect;

export const ArcType = withLayoutMetadata(
    overridable<IArcTypeInputProps>(connect(ArcTypeComponent)),
    {
        name: "ArcType",
        displayName: "Arc Type",
        category: "Comic",
        description: "",
        icon,
        getSlotDisplayName: (slotName, props) => props[slotName] || slotName,
        layoutEditor: ArcTypeLayoutEditor,
        propEditor: ArcTypePropEditor,
    }
);
