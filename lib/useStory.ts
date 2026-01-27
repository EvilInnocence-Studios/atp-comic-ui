import { IComicArc } from "@comic-shared/arc/types";
import { IComicPage } from "@comic-shared/page/types";
import { useSetting } from "@common/lib/setting/services";
import { services } from "@core/lib/api";
import { useEffect, useMemo, useState } from "react";
import { memoizePromise } from "ts-functional";

const getArcs  = memoizePromise(() => services().arc.search()    );
const getPages = memoizePromise(() => services().page.searchAll());

export const useStory = () => {
    const [arcs, setArcs] = useState<IComicArc[]>([]);
    const [pages, setPages] = useState<IComicPage[]>([]);
    const arcNames = (useSetting("comic.arcNames") || "").split(",");
    const arcsLoaded = arcs.length > 0;
    const pagesLoaded = pages.length > 0;

    useEffect(() => {
        getArcs().then(setArcs);
        getPages().then(setPages);
    }, []);

    return useMemo(() => {
        const arc = {
            isLoaded: arcsLoaded,
            get: (url?:string) => url ? arcs.find(a => a.url === url) || null : null,
            getById: (id?:string) => id ? arcs.find(a => a.id === id) || null : null,
            list: () => arcs,
            typeName: (arc?:IComicArc | null) => {
                if (!arc) return "Arc";
                let level = 1;
                let curArc = arc;
                while (curArc.parentId) {
                    const parentArc = arcs.find(a => a.id === curArc?.parentId) || null;
                    if (!parentArc) break;
                    curArc = parentArc;
                    level++;
                }
                return arcNames[level - 1] || "Arc";
            },
            root: (arcId?: string) => {
                if (!arcId) return null;
                let currentArc = arcs.find(a => a.id === arcId) || null;
                if (!currentArc) return null;
                while (currentArc.parentId) {
                    const parentArc = arcs.find(a => a.id === currentArc?.parentId) || null;
                    if (!parentArc) break;
                    currentArc = parentArc;
                }
                return currentArc;
            },
            parents: (arcId?: string | null):IComicArc[] => {
                const parents: IComicArc[] = [];
                let currentArc = arcs.find(a => a.id === arcId) || null;
                while (currentArc?.parentId) {
                    const parentArc = arcs.find(a => a.id === currentArc?.parentId) || null;
                    if (!parentArc) break;
                    parents.unshift(parentArc);
                    currentArc = parentArc;
                }
                return parents;
            },
            subArcs: (parentId?:string) => parentId
                ? arcs.filter(a => a.parentId === parentId && a.enabled).sort((a,b) => (a.sortOrder || 0) - (b.sortOrder || 0))
                : [],
            pages: (arcId?:string) => arcId
                ? pages.filter(p => p.arcId === arcId && p.enabled).sort((a,b) => (a.sortOrder || 0) - (b.sortOrder || 0))
                : [],
            allPages: (arcId?: string):IComicPage[] => {
                if (!arcId) return [];
                const subArcs = arc.subArcs(arcId);
                if (subArcs.length === 0) {
                    return arc.pages(arcId);
                } else {
                    return subArcs
                        .map(sa => arc.allPages(sa.id))
                        .flat();
                }
            },
            leafArcs: (arcId:string):IComicArc[] => {
                const subArcs = arc.subArcs(arcId);
                return subArcs.length === 0
                    ? [arc.getById(arcId) as IComicArc]
                    : subArcs.map(sa => arc.leafArcs(sa.id)).flat();
            },
            first: (arcId:string):IComicArc | null => {
                const rootArc = arc.root(arcId);
                if (!rootArc) return null;
                const leafArcs = arc.leafArcs(rootArc.id);
                return leafArcs.length > 0 ? leafArcs[0] : null;
            },
            latest: (arcId:string):IComicArc | null => {
                const rootArc = arc.root(arcId);
                if (!rootArc) return null;
                const leafArcs = arc.leafArcs(rootArc.id);
                return leafArcs.slice(-1)[0] || null;
            },
            next: (arcId:string):IComicArc | null => {
                const rootArc = arc.root(arcId);
                if (!rootArc) return null;
                const leafArcs = arc.leafArcs(rootArc.id);
                const index = leafArcs.findIndex(a => a.id === arcId);
                return leafArcs[index + 1] || null;
            },
            prev: (arcId:string):IComicArc | null => {
                const rootArc = arc.root(arcId);
                if (!rootArc) return null;
                const leafArcs = arc.leafArcs(rootArc.id);
                const index = leafArcs.findIndex(a => a.id === arcId);
                return leafArcs[index - 1] || null;
            },
            latestPage: (arcId?:string) => {
                if (!arcId) return null;
                const arcPages = arc.allPages(arc.root(arcId)?.id);
                return arcPages.slice(-1)[0] || null;
            },
            firstPage: (arcId?:string) => {
                if (!arcId) return null;
                const arcPages = arc.allPages(arc.root(arcId)?.id);
                return arcPages[0] || null;
            },
            arcNumber: (arcId?:string) => {
                if (!arcId) return null;
                const arcToFind = arcs.find(a => a.id === arcId);
                if (!arcToFind) return null;
                const parentArc = arcs.find(a => a.id === arcToFind.parentId) || null;
                const siblingArcs = parentArc
                    ? arcs.filter(a => a.parentId === parentArc.id).sort((a,b) => (a.sortOrder || 0) - (b.sortOrder || 0))
                    : arcs.filter(a => !a.parentId).sort((a,b) => (a.sortOrder || 0) - (b.sortOrder || 0));
                return siblingArcs.findIndex(a => a.id === arcId) + 1 || null;
            },
            isVerticalScroll: (arcId?:string) => {
                const root = arc.root(arcId);
                if (!root) return false;
                return root.isVerticalScroll;
            },
        };
        const page = {
            isLoaded: pagesLoaded,
            get: (url:string) => pages.find(p => p.url === url) || null,
            getById: (id?:string) => id ? pages.find(p => p.id === id) || null : null,
            pageNumber: (id:string) => {
                const page = pages.find(p => p.id === id);
                if (!page) return null;
                const arcPages = arc.allPages(arc.root(page.arcId)?.id);
                return arcPages.findIndex(p => p.id === id) + 1 || null;
            },
            list: () => pages,
            next: (currentPageId?:string) => {
                if (!currentPageId) return null;
                const currentPage = page.getById(currentPageId);
                if (!currentPage) return null;
                const arcPages = arc.allPages(arc.root(currentPage.arcId)?.id);
                const currentIndex = arcPages.findIndex(p => p.id === currentPageId);
                if (currentIndex === -1 || currentIndex === arcPages.length - 1) return null;
                return arcPages[currentIndex + 1];
            },
            previous: (currentPageId?:string) => {
                if (!currentPageId) return null;
                const currentPage = page.getById(currentPageId);
                if (!currentPage) return null;
                const arcPages = arc.allPages(arc.root(currentPage.arcId)?.id);
                const currentIndex = arcPages.findIndex(p => p.id === currentPageId);
                if (currentIndex <= 0) return null;
                return arcPages[currentIndex - 1];
            },
        }

        return {arc, page};
    }, [arcs, pages, arcNames]);
}