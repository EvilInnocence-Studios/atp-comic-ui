import { overridable } from "@core/lib/overridable";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import { createInjector, inject, mergeProps } from "unstateless";
import { injectArcContextProps } from "@comic/lib/context";
import { ArcDescriptionComponent } from "./ArcDescription.component";
import { ArcDescriptionProps, IArcDescriptionInputProps } from "./ArcDescription.d";
import { ArcDescriptionLayoutEditor } from "./ArcDescription.layout";
import { ArcDescriptionPropEditor } from "./ArcDescription.props";
import icon from './icon.svg';

const injectArcDescriptionProps = createInjector(injectArcContextProps);

const connect = inject<IArcDescriptionInputProps, ArcDescriptionProps>(mergeProps(
    injectArcDescriptionProps,
));
export const connectArcDescription = connect;

export const ArcDescription = withLayoutMetadata(
    overridable<IArcDescriptionInputProps>(connect(ArcDescriptionComponent)),
    {
        name: "ArcDescription",
        displayName: "Arc Description",
        category: "Comic",
        subCategory: "Arc",
        description: "",
        icon,
        getSlotDisplayName: (slotName, props) => props[slotName] || slotName,
        layoutEditor: ArcDescriptionLayoutEditor,
        propEditor: ArcDescriptionPropEditor,
    }
);
