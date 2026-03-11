import { createInjector, inject, mergeProps } from "unstateless";
import {PageNavComponent} from "./PageNav.component";
import {IPageNavInputProps, PageNavProps, IPageNavProps} from "./PageNav.d";
import { overridable } from "@core/lib/overridable";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import icon from './icon.svg';
import { PageNavPropEditor } from "./PageNav.props";
import { useStory } from "@comic/lib/useStory";
import { useContext } from "react";
import { ComicPageUrlContext } from "@comic/lib/context";
import { useSetting } from "@common/lib/setting/services";

const injectPageNavProps = createInjector(({url}:IPageNavInputProps):IPageNavProps => {
    const story = useStory();
    
    const pageUrl = useContext(ComicPageUrlContext);
    const page = story.page.get(url || pageUrl);

    const pageArc = story.arc.getById(page?.arcId);
    const nextPage = story.page.next(page?.id);
    const prevPage = story.page.previous(page?.id);
    const allPages = pageArc ? story.arc.allPages(story.arc.root(pageArc.id)?.id) : [];
    const firstPage = pageArc ? allPages[0] || null : null;
    const lastPage = pageArc ? allPages.slice(-1)[0] || null : null;

    const archiveLinkLevel = useSetting("comic.ArchiveLinkLevel");
    const parents = [...story.arc.parents(pageArc?.id), pageArc].filter(a => a !== null);
    const arc = archiveLinkLevel === ""
        ? pageArc
        : parents[parseInt(archiveLinkLevel, 10)];    
    
    return {nextPage, prevPage, firstPage, lastPage, arc};
});

const connect = inject<IPageNavInputProps, PageNavProps>(mergeProps(
    injectPageNavProps,
));
export const connectPageNav = connect;

export const PageNav = withLayoutMetadata(
    overridable<IPageNavInputProps>(connect(PageNavComponent)),
    {
        name: "PageNav",
        displayName: "Page Nav",
        category: "Comic",
        description: "",
        icon,
        getSlotDisplayName: (slotName, props) => props[slotName] || slotName,
        propEditor: PageNavPropEditor,
    }
);
