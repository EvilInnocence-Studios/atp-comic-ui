import { createInjector, inject, mergeProps } from "unstateless";
import {PageNameComponent} from "./PageName.component";
import {IPageNameInputProps, PageNameProps, IPageNameProps} from "./PageName.d";
import { overridable } from "@core/lib/overridable";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import icon from './icon.svg';
import { PageNamePropEditor } from "./PageName.props";
import { useStory } from "@comic/lib/useStory";
import { ComicPageUrlContext } from "@comic/lib/context";
import { useContext } from "react";

const injectPageNameProps = createInjector(({url}:IPageNameInputProps):IPageNameProps => {
    const story = useStory();
    const pageUrl = useContext(ComicPageUrlContext);
    const page = story.page.get(url || pageUrl);
    
    return {page};
});

const connect = inject<IPageNameInputProps, PageNameProps>(mergeProps(
    injectPageNameProps,
));
export const connectPageName = connect;

export const PageName = withLayoutMetadata(
    overridable<IPageNameInputProps>(connect(PageNameComponent)),
    {
        name: "PageName",
        displayName: "Page Name",
        category: "Comic",
        description: "",
        icon,
        getSlotDisplayName: (slotName, props) => props[slotName] || slotName,
        propEditor: PageNamePropEditor,
    }
);
