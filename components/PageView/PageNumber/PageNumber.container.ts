import { ComicPageUrlContext } from "@comic/lib/context";
import { useStory } from "@comic/lib/useStory";
import { overridable } from "@core/lib/overridable";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import { useContext } from "react";
import { createInjector, inject, mergeProps } from "unstateless";
import icon from './icon.svg';
import { PageNumberComponent } from "./PageNumber.component";
import { IPageNumberInputProps, IPageNumberProps, PageNumberProps } from "./PageNumber.d";
import { PageNumberPropEditor } from "./PageNumber.props";
import { PageNumberLayoutEditor } from "./PageNumber.layout";

const injectPageNumberProps = createInjector(({url}:IPageNumberInputProps):IPageNumberProps => {
    const story = useStory();
    const pageUrl = useContext(ComicPageUrlContext);

    const page = story.page.get(url || pageUrl);
    const pageNumber = story.arc.allPages(story.arc.root(page?.arcId)?.id).findIndex(p => p.id === page?.id) + 1;

    return { pageNumber };
});

const connect = inject<IPageNumberInputProps, PageNumberProps>(mergeProps(
    injectPageNumberProps,
));
export const connectPageNumber = connect;

export const PageNumber = withLayoutMetadata(
    overridable<IPageNumberInputProps>(connect(PageNumberComponent)),
    {
        name: "PageNumber",
        displayName: "Page Number",
        category: "Comic",
        subCategory: "Page",
        description: "",
        icon,
        getSlotDisplayName: (slotName, props) => props[slotName] || slotName,
        propEditor: PageNumberPropEditor,
        layoutEditor: PageNumberLayoutEditor,
    }
);
