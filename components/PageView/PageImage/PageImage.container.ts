import { ComicPageUrlContext } from "@comic/lib/context";
import { useStory } from "@comic/lib/useStory";
import { overridable } from "@core/lib/overridable";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import { useContext } from "react";
import { createInjector, inject, mergeProps } from "unstateless";
import icon from './icon.svg';
import { PageImageComponent } from "./PageImage.component";
import { IPageImageInputProps, IPageImageProps, PageImageProps } from "./PageImage.d";
import { PageImageLayoutEditor } from "./PageImage.layout";
import { PageImagePropEditor } from "./PageImage.props";

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
        displayName: "Page Image",
        category: "Comic",
        subCategory: "Page",
        description: "",
        icon,
        getSlotDisplayName: (slotName, props) => props[slotName] || slotName,
        propEditor: PageImagePropEditor,
        layoutEditor: PageImageLayoutEditor,
    }
);
