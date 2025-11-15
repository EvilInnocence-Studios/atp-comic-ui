import { createInjector, inject, mergeProps } from "unstateless";
import {ArcTitleComponent} from "./ArcTitle.component";
import {IArcTitleInputProps, ArcTitleProps, IArcTitleProps} from "./ArcTitle.d";
import { overridable } from "@core/lib/overridable";
import { useStory } from "@comic/lib/useStory";

const injectArcTitleProps = createInjector(({}:IArcTitleInputProps):IArcTitleProps => {
    const {arc} = useStory();
    
    const arcTypeName = arc.typeName;
    const arcNumber = arc.arcNumber;

    return {arcTypeName, arcNumber};
});

const connect = inject<IArcTitleInputProps, ArcTitleProps>(mergeProps(
    injectArcTitleProps,
));

export const ArcTitle = overridable<IArcTitleInputProps>(connect(ArcTitleComponent));
export const connectArcTitle = connect;