import { overridable } from "@core/lib/overridable";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import { createInjector, inject, mergeProps } from "unstateless";
import { injectArcContextProps } from "@comic/lib/context";
import { ArcTitleComponent } from "./ArcTitle.component";
import { ArcTitleProps, IArcTitleInputProps } from "./ArcTitle.d";
import { ArcTitleLayoutEditor } from "./ArcTitle.layout";
import { ArcTitlePropEditor } from "./ArcTitle.props";
import icon from './icon.svg';

const injectArcTitleProps = createInjector(injectArcContextProps);

const connect = inject<IArcTitleInputProps, ArcTitleProps>(mergeProps(
    injectArcTitleProps,
));
export const connectArcTitle = connect;

export const ArcTitle = withLayoutMetadata(
    overridable<IArcTitleInputProps>(connect(ArcTitleComponent)),
    {
        name: "ArcTitle",
        displayName: "Arc Title",
        category: "Comic",
        subCategory: "Arc",
        description: "",
        icon,
        getSlotDisplayName: (slotName, props) => props[slotName] || slotName,
        layoutEditor: ArcTitleLayoutEditor,
        propEditor: ArcTitlePropEditor,
    }
);
