import { createInjector, inject, mergeProps } from "unstateless";
import {ArcTitleComponent} from "./ArcTitle.component";
import {IArcTitleInputProps, ArcTitleProps, IArcTitleProps} from "./ArcTitle.d";
import { overridable } from "@core/lib/overridable";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import icon from './icon.svg';
import { ArcTitleLayoutEditor } from "./ArcTitle.layout";
import { ArcTitlePropEditor } from "./ArcTitle.props";
import { useContext } from "react";
import { ComicArcUrlContext } from "@comic/lib/context";
import { useStory } from "@comic/lib/useStory";

const injectArcTitleProps = createInjector(({url}:IArcTitleInputProps):IArcTitleProps => {
    const defaultUrl = useContext(ComicArcUrlContext);
    const story = useStory();
    const arc = story.arc.get(url || defaultUrl);
    
    return {arc};
});

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
        description: "",
        icon,
        getSlotDisplayName: (slotName, props) => props[slotName] || slotName,
        layoutEditor: ArcTitleLayoutEditor,
        propEditor: ArcTitlePropEditor,
    }
);
