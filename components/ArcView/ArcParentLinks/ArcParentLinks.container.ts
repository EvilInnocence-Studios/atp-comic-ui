import { useStory } from "@comic/lib/useStory";
import { overridable } from "@core/lib/overridable";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import { createInjector, inject, mergeProps } from "unstateless";
import { IArcContextProps, injectArcContextProps } from "@comic/lib/context";
import { ArcParentLinksComponent } from "./ArcParentLinks.component";
import { ArcParentLinksProps, IArcParentLinksInputProps, IArcParentLinksProps } from "./ArcParentLinks.d";
import { ArcParentLinksLayoutEditor } from "./ArcParentLinks.layout";
import { ArcParentLinksPropEditor } from "./ArcParentLinks.props";
import icon from './icon.svg';

const injectArcParentLinksProps = createInjector(({arc, show = "all"}:IArcParentLinksInputProps & IArcContextProps):IArcParentLinksProps => {
    const story = useStory();
    
    let parents = story.arc.parents(arc?.id || '');    
    if (show === "root") {
        parents = parents.slice(0, 1);
    } else if (show === "parent") {
        parents = parents.slice(-1);
    }
    
    return {parents};
});

const connect = inject<IArcParentLinksInputProps, ArcParentLinksProps>(mergeProps(
    injectArcContextProps,
    injectArcParentLinksProps,
));
export const connectArcParentLinks = connect;

export const ArcParentLinks = withLayoutMetadata(
    overridable<IArcParentLinksInputProps>(connect(ArcParentLinksComponent)),
    {
        name: "ArcParentLinks",
        displayName: "Arc Parent Links",
        category: "Comic",
        subCategory: "Arc",
        description: "",
        icon,
        getSlotDisplayName: (slotName, props) => props[slotName] || slotName,
        layoutEditor: ArcParentLinksLayoutEditor,
        propEditor: ArcParentLinksPropEditor,
    }
);
