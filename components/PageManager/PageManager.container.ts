import { IComicPage } from "@comic-shared/page/types";
import { services } from "@core/lib/api";
import { overridable } from "@core/lib/overridable";
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

    const upload = (file:File):Promise<IComicPage> => 
        services().page.getUploadUrl(file.name)
        .then((uploadUrl:string) => 
            fetch(uploadUrl, {
                method: 'PUT',
                headers: {
                    'Content-Type': file.type,
                },
                body: file,
            })
            .then(() => file.name)
        ).then((imageUrl:string) => 
            services().page.create({
                name: "",
                enabled: false,
                url: null,
                sortOrder: 0,
                imageUrl,
                transcript: null,
                postDate: null,
                arcId
            })
        );

    const onUploadSuccess = (newPages: IComicPage[]) => {
        console.log("Uploaded pages:", newPages);
        console.log("Sorting pages");
        // Get the current maximum sortOrder for the arc's pages
        const currentMaxSortOrder = pages.reduce((max, page) => page.sortOrder > max ? page.sortOrder : max, 0);

        // Make sure pages are in the right order based on file name
        // Extract any numbers from the url field, sort the pages based on that number,
        // set the sortOrder accordingly, then update the pages
        const pageNumbers = newPages.map(page => page.imageUrl ? page.imageUrl.replace(/\D/g, '') : 0);
        console.log("Page numbers extracted from URLs:", pageNumbers);
        const sorted = newPages.sort((a, b) => {
            const aNum = a.imageUrl ? parseInt(a.imageUrl.replace(/\D/g, '')) : 0;
            const bNum = b.imageUrl ? parseInt(b.imageUrl.replace(/\D/g, '')) : 0;
            return aNum - bNum;
        }).map((page, index) => ({...page, sortOrder: index + 1 + currentMaxSortOrder}));

        // Update the pages with their new sortOrder, then refresh
        Promise.all(sorted.map(page => services().page.update(page.id, {sortOrder: page.sortOrder})))
            .then(refresh);
    }

    return {pages, isLoading: loader.isLoading, refresh, remove, upload, onUploadSuccess};
});

const connect = inject<IPageManagerInputProps, PageManagerProps>(mergeProps(
    injectPageManagerProps,
));

export const PageManager = overridable<IPageManagerInputProps>(connect(PageManagerComponent));
