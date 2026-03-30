import { injectArcContextProps } from "@comic/lib/context";
import { overridable } from "@core/lib/overridable";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import { createInjector, inject, mergeProps } from "unstateless";
import { ArcBannerComponent } from "./ArcBanner.component";
import { ArcBannerProps, IArcBannerInputProps } from "./ArcBanner.d";
import { ArcBannerLayoutEditor } from "./ArcBanner.layout";
import { ArcBannerPropEditor } from "./ArcBanner.props";
import icon from './icon.svg';

const injectArcBannerProps = createInjector(injectArcContextProps);

const connect = inject<IArcBannerInputProps, ArcBannerProps>(mergeProps(
    injectArcBannerProps,
));
export const connectArcBanner = connect;

export const ArcBanner = withLayoutMetadata(
    overridable<IArcBannerInputProps>(connect(ArcBannerComponent)),
    {
        name: "ArcBanner",
        displayName: "Arc Banner",
        category: "Comic",
        subCategory: "Arc",
        description: "",
        icon,
        getSlotDisplayName: (slotName, props) => props[slotName] || slotName,
        layoutEditor: ArcBannerLayoutEditor,
        propEditor: ArcBannerPropEditor,
    }
);
