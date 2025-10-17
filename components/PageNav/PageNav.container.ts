import { useStory } from "@comic/lib/useStory";
import { useSetting } from "@common/lib/setting/services";
import { createInjector, inject, mergeProps } from "unstateless";
import { PageNavComponent } from "./PageNav.component";
import { IPageNavInputProps, IPageNavProps, PageNavProps } from "./PageNav.d";

const injectPageNavProps = createInjector(({page}:IPageNavInputProps):IPageNavProps => {
    const story = useStory();
    const linkType = useSetting("comic.navLinkStyle");
    
    const pageArc = story.arc.getById(page.arcId);
    const nextPage = story.page.next(page?.id);
    const prevPage = story.page.previous(page?.id);
    const allPages = pageArc ? story.arc.allPages(story.arc.root(pageArc.id)?.id) : [];
    const firstPage = pageArc ? allPages[0] || null : null;
    const lastPage = pageArc ? allPages.slice(-1)[0] || null : null;

    const archiveLinkLevel = useSetting("comic.ArchiveLinkLevel");
    const arcNames = useSetting("comic.arcNames")?.split(",") || [];
    const parents = [...story.arc.parents(pageArc?.id), pageArc].filter(a => a !== null);
    console.log(parents);
    console.log(arcNames);
    console.log(archiveLinkLevel);
    const arc = archiveLinkLevel === ""
        ? pageArc
        : parents[parseInt(archiveLinkLevel, 10)];    
    
    return {nextPage, prevPage, firstPage, lastPage, arc, linkType};
});

const connect = inject<IPageNavInputProps, PageNavProps>(mergeProps(
    injectPageNavProps,
));

export const PageNav = connect(PageNavComponent);
