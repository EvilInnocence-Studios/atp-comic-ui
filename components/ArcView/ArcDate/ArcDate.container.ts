import { createInjector, inject, mergeProps } from "unstateless";
import {ArcDateComponent} from "./ArcDate.component";
import {IArcDateInputProps, ArcDateProps, IArcDateProps} from "./ArcDate.d";
import { overridable } from "@core/lib/overridable";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import icon from './icon.svg';
import { ArcDateLayoutEditor } from "./ArcDate.layout";
import { ArcDatePropEditor } from "./ArcDate.props";
import { injectArcContextProps } from "../ArcView.helpers";

const injectArcDateProps = createInjector(({}:IArcDateInputProps):IArcDateProps => {
    return {};
});

const connect = inject<IArcDateInputProps, ArcDateProps>(mergeProps(
    injectArcContextProps,
    injectArcDateProps,
));
export const connectArcDate = connect;

export const ArcDate = withLayoutMetadata(
    overridable<IArcDateInputProps>(connect(ArcDateComponent)),
    {
        name: "ArcDate",
        displayName: "Arc Date",
        category: "Comic",
        description: "",
        icon,
        getSlotDisplayName: (slotName, props) => props[slotName] || slotName,
        layoutEditor: ArcDateLayoutEditor,
        propEditor: ArcDatePropEditor,
    }
);
