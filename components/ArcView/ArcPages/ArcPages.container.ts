import { useStory } from "@comic/lib/useStory";
import { overridable } from "@core/lib/overridable";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import { createInjector, inject, mergeProps } from "unstateless";
import { IArcContextProps, injectArcContextProps } from "@comic/lib/context";
import { ArcPagesComponent } from "./ArcPages.component";
import { ArcPagesProps, IArcPagesInputProps, IArcPagesProps } from "./ArcPages.d";
import { ArcPagesLayoutEditor } from "./ArcPages.layout";
import { ArcPagesPropEditor } from "./ArcPages.props";
import icon from './icon.svg';

const injectArcPagesProps = createInjector(({arc}:IArcPagesInputProps & IArcContextProps):IArcPagesProps => {
    const story = useStory();
    
    const pages = story.arc.pages(arc?.id);

    return {pages};
});

const connect = inject<IArcPagesInputProps, ArcPagesProps>(mergeProps(
    injectArcContextProps,
    injectArcPagesProps,
));
export const connectArcPages = connect;

export const ArcPages = withLayoutMetadata(
    overridable<IArcPagesInputProps>(connect(ArcPagesComponent)),
    {
        name: "ArcPages",
        displayName: "Arc Pages",
        category: "Comic",
        subCategory: "Arc",
        description: "",
        icon,
        getSlotDisplayName: (slotName, props) => props[slotName] || slotName,
        layoutEditor: ArcPagesLayoutEditor,
        propEditor: ArcPagesPropEditor,
    }
);
