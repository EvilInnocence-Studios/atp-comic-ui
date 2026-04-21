import { injectArcContextProps } from "@comic/lib/context";
import { overridable } from "@core/lib/overridable";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import { createInjector, inject, mergeProps } from "unstateless";
import { ArcTranscriptComponent } from "./ArcTranscript.component";
import { ArcTranscriptProps, IArcTranscriptInputProps } from "./ArcTranscript.d";
import { ArcTranscriptLayoutEditor } from "./ArcTranscript.layout";
import { ArcTranscriptPropEditor } from "./ArcTranscript.props";
import icon from './icon.svg';

const injectArcTranscriptProps = createInjector(injectArcContextProps);

const connect = inject<IArcTranscriptInputProps, ArcTranscriptProps>(mergeProps(
    injectArcTranscriptProps,
));
export const connectArcTranscript = connect;

export const ArcTranscript = withLayoutMetadata(
    overridable<IArcTranscriptInputProps>(connect(ArcTranscriptComponent)),
    {
        name: "ArcTranscript",
        displayName: "ArcTranscript",
        category: "Comic",
        subCategory: "Arc",
        description: "",
        icon,
        getSlotDisplayName: (slotName, props) => props[slotName] || slotName,
        layoutEditor: ArcTranscriptLayoutEditor,
        propEditor: ArcTranscriptPropEditor,
    }
);
