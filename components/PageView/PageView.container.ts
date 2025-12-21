import { useStory } from "@comic/lib/useStory";
import { overridable } from "@core/lib/overridable";
import { useToggle } from "@core/lib/useToggle";
import { createInjector, inject, mergeProps } from "unstateless";
import { PageViewComponent } from "./PageView.component";
import { IPageViewInputProps, IPageViewProps, PageViewProps } from "./PageView.d";
import { useLayoutData } from "@theming/lib/useLayoutData";
import { useEffect } from "react";

const injectPageViewProps = createInjector(({ url }: IPageViewInputProps): IPageViewProps => {
    const story = useStory();
    const transcript = useToggle();
    const [, setPageTitle] = useLayoutData<string>("pageTitle");

    const page = story.page.get(url);
    const nextPage = story.page.next(page?.id);
    const pageNumber = story.arc.allPages(story.arc.root(page?.arcId)?.id).findIndex(p => p.id === page?.id) + 1;

    useEffect(() => {
        setPageTitle(pageNumber ? `Page ${pageNumber}` : "Loading...");
    }, [pageNumber]);

    return { page, nextPage, transcript, pageNumber };
});

const connect = inject<IPageViewInputProps, PageViewProps>(mergeProps(
    injectPageViewProps,
));
export const PageViewPropsInjector = injectPageViewProps;

export const PageView = overridable<IPageViewInputProps>(connect(PageViewComponent));
export const connectPageView = connect;