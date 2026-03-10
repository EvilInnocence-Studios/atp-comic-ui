import { ComicPageUrlContext } from "@comic/lib/context";
import { useStory } from "@comic/lib/useStory";
import { overridable } from "@core/lib/overridable";
import { useLayoutData } from "@theming/lib/useLayoutData";
import { useContext, useEffect } from "react";
import { createInjector, inject, mergeProps } from "unstateless";
import { PageViewComponent } from "./PageView.component";
import { IPageViewInputProps, IPageViewProps, PageViewProps } from "./PageView.d";

const injectPageViewProps = createInjector(({ url }: IPageViewInputProps): IPageViewProps => {
    const story = useStory();
    const [, setPageTitle] = useLayoutData<string>("pageTitle");
    const pageUrl = useContext(ComicPageUrlContext);

    const page = story.page.get(url || pageUrl);
    const pageNumber = story.arc.allPages(story.arc.root(page?.arcId)?.id).findIndex(p => p.id === page?.id) + 1;

    useEffect(() => {
        setPageTitle(pageNumber ? `Page ${pageNumber}` : "Loading...");
    }, [pageNumber]);

    return { page };
});

const connect = inject<IPageViewInputProps, PageViewProps>(mergeProps(
    injectPageViewProps,
));
export const PageViewPropsInjector = injectPageViewProps;

export const PageView = overridable<IPageViewInputProps>(connect(PageViewComponent));
export const connectPageView = connect;