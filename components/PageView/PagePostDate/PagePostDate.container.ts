import { createInjector, inject, mergeProps } from "unstateless";
import {PagePostDateComponent} from "./PagePostDate.component";
import {IPagePostDateInputProps, PagePostDateProps, IPagePostDateProps} from "./PagePostDate.d";
import { overridable } from "@core/lib/overridable";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import icon from './icon.svg';
import { PagePostDatePropEditor } from "./PagePostDate.props";
import { useStory } from "@comic/lib/useStory";
import { useContext } from "react";
import { ComicPageUrlContext } from "@comic/lib/context";

const injectPagePostDateProps = createInjector(({url}:IPagePostDateInputProps):IPagePostDateProps => {
    const story = useStory();
    const pageUrl = useContext(ComicPageUrlContext);
    const page = story.page.get(url || pageUrl);
    return {page};
});

const connect = inject<IPagePostDateInputProps, PagePostDateProps>(mergeProps(
    injectPagePostDateProps,
));
export const connectPagePostDate = connect;

export const PagePostDate = withLayoutMetadata(
    overridable<IPagePostDateInputProps>(connect(PagePostDateComponent)),
    {
        name: "PagePostDate",
        displayName: "PagePostDate",
        category: "",
        description: "",
        icon,
        getSlotDisplayName: (slotName, props) => props[slotName] || slotName,
        propEditor: PagePostDatePropEditor,
    }
);
