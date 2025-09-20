import { IComicPage } from "@comic-shared/page/types";
import { services } from "@core/lib/api";
import { useLoaderAsync } from "@core/lib/useLoader";
import { useEffect, useState } from "react";
import { createInjector, inject, mergeProps } from "unstateless";
import { PageManagerComponent } from "./PageManager.component";
import { IPageManagerInputProps, IPageManagerProps, PageManagerProps } from "./PageManager.d";

const injectPageManagerProps = createInjector(({arcId}:IPageManagerInputProps):IPageManagerProps => {
    const [pages, setPages] = useState<IComicPage[]>([]);
    const loader = useLoaderAsync();

    const remove = (pageId:string) => () => {
        loader(() => services().page.remove(pageId).then(refresh));
    }

    const refresh = () => {
        loader(() => services().page.search(arcId).then(setPages));
    }

    useEffect(refresh, [arcId]);

    return {pages, isLoading: loader.isLoading, refresh, remove};
});

const connect = inject<IPageManagerInputProps, PageManagerProps>(mergeProps(
    injectPageManagerProps,
));

export const PageManager = connect(PageManagerComponent);
