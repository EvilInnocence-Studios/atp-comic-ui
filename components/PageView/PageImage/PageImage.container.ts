import { createInjector, inject, mergeProps } from "unstateless";
import {PageImageComponent} from "./PageImage.component";
import {IPageImageInputProps, PageImageProps, IPageImageProps} from "./PageImage.d";
import { overridable } from "@core/lib/overridable";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import icon from './icon.svg';
import { PageImagePropEditor } from "./PageImage.props";
import { useContext } from "react";
import { ComicPageUrlContext } from "@comic/lib/context";
import { useStory } from "@comic/lib/useStory";

const injectPageImageProps = createInjector(({url}:IPageImageInputProps):IPageImageProps => {
    const contextUrl = useContext(ComicPageUrlContext);
    const pageUrl = url || contextUrl;
    const story = useStory();

    const page = story.page.get(url || pageUrl);
    const nextPage = story.page.next(page?.id);
 
    
    return {pageUrl, page, nextPage,};
});

const connect = inject<IPageImageInputProps, PageImageProps>(mergeProps(
    injectPageImageProps,
));
export const connectPageImage = connect;

export const PageImage = withLayoutMetadata(
    overridable<IPageImageInputProps>(connect(PageImageComponent)),
    {
        name: "PageImage",
        displayName: "PageImage",
        category: "",
        description: "",
        icon,
        getSlotDisplayName: (slotName, props) => props[slotName] || slotName,
        propEditor: PageImagePropEditor,
    }
);
