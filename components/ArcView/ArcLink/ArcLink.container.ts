import { overridable } from "@core/lib/overridable";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import { createInjector, inject, mergeProps } from "unstateless";
import { injectArcContextProps } from "../ArcView.helpers";
import { ArcLinkComponent } from "./ArcLink.component";
import { ArcLinkProps, IArcLinkInputProps, IArcLinkProps } from "./ArcLink.d";
import { ArcLinkPropEditor } from "./ArcLink.props";
import icon from './icon.svg';

const injectArcLinkProps = createInjector(({}:IArcLinkInputProps):IArcLinkProps => {
    return {};
});

const connect = inject<IArcLinkInputProps, ArcLinkProps>(mergeProps(
    injectArcContextProps,
    injectArcLinkProps,
));
export const connectArcLink = connect;

export const ArcLink = withLayoutMetadata(
    overridable<IArcLinkInputProps>(connect(ArcLinkComponent)),
    {
        name: "ArcLink",
        displayName: "Arc Link",
        category: "Comic",
        description: "",
        icon,
        getSlotDisplayName: (slotName, props) => props[slotName] || slotName,
        propEditor: ArcLinkPropEditor,
    }
);
