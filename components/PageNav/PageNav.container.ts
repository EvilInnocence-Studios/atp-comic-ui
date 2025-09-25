import { createInjector, inject, mergeProps } from "unstateless";
import {PageNavComponent} from "./PageNav.component";
import {IPageNavInputProps, PageNavProps, IPageNavProps} from "./PageNav.d";
import { useStory } from "@comic/lib/useStory";

const injectPageNavProps = createInjector(({page}:IPageNavInputProps):IPageNavProps => {
    const story = useStory();
    
    const arc = story.arc.getById(page.arcId);
    const nextPage = story.page.next(page?.id);
    const prevPage = story.page.previous(page?.id);
    const allPages = arc ? story.arc.allPages(story.arc.root(arc.id)?.id) : [];
    console.log("All pages", allPages);
    const firstPage = arc ? allPages[0] || null : null;
    const lastPage = arc ? allPages.slice(-1)[0] || null : null;
    
    return {nextPage, prevPage, firstPage, lastPage, arc};
});

const connect = inject<IPageNavInputProps, PageNavProps>(mergeProps(
    injectPageNavProps,
));

export const PageNav = connect(PageNavComponent);
