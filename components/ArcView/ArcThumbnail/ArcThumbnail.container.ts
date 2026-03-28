import { createInjector, inject, mergeProps } from "unstateless";
import {ArcThumbnailComponent} from "./ArcThumbnail.component";
import {IArcThumbnailInputProps, ArcThumbnailProps, IArcThumbnailProps} from "./ArcThumbnail.d";
import { overridable } from "@core/lib/overridable";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import icon from './icon.svg';
import { ArcThumbnailLayoutEditor } from "./ArcThumbnail.layout";
import { ArcThumbnailPropEditor } from "./ArcThumbnail.props";
import { injectArcContextProps } from "../ArcView.helpers";

const injectArcThumbnailProps = createInjector(injectArcContextProps);

const connect = inject<IArcThumbnailInputProps, ArcThumbnailProps>(mergeProps(
    injectArcThumbnailProps,
));
export const connectArcThumbnail = connect;

export const ArcThumbnail = withLayoutMetadata(
    overridable<IArcThumbnailInputProps>(connect(ArcThumbnailComponent)),
    {
        name: "ArcThumbnail",
        displayName: "Arc Thumbnail",
        category: "Comic",
        description: "",
        icon,
        getSlotDisplayName: (slotName, props) => props[slotName] || slotName,
        layoutEditor: ArcThumbnailLayoutEditor,
        propEditor: ArcThumbnailPropEditor,
    }
);
