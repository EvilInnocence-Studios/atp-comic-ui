import { createInjector, inject, mergeProps } from "unstateless";
import {ArcNumberComponent} from "./ArcNumber.component";
import {IArcNumberInputProps, ArcNumberProps, IArcNumberProps} from "./ArcNumber.d";
import { overridable } from "@core/lib/overridable";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import icon from './icon.svg';
import { ArcNumberLayoutEditor } from "./ArcNumber.layout";
import { ArcNumberPropEditor } from "./ArcNumber.props";
import { injectArcContextProps } from "@comic/lib/context";
import { useStory } from "@comic/lib/useStory";
import { IComicArc } from "@comic-shared/arc/types";

const injectArcNumberProps = createInjector(({arc}:IArcNumberInputProps & {arc: IComicArc | null}):IArcNumberProps => {
    const story = useStory();
    const arcNumber = story.arc.arcNumber(arc?.id || "");
    
    return {arcNumber};
});

const connect = inject<IArcNumberInputProps, ArcNumberProps>(mergeProps(
    injectArcContextProps,
    injectArcNumberProps,
));
export const connectArcNumber = connect;

export const ArcNumber = withLayoutMetadata(
    overridable<IArcNumberInputProps>(connect(ArcNumberComponent)),
    {
        name: "ArcNumber",
        displayName: "Arc Number",
        category: "Comic",
        subCategory: "Arc",
        description: "",
        icon,
        getSlotDisplayName: (slotName, props) => props[slotName] || slotName,
        layoutEditor: ArcNumberLayoutEditor,
        propEditor: ArcNumberPropEditor,
    }
);
