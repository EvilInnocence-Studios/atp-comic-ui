import { IComicCharacter } from "@comic-shared/character/types";
import { IComicPage, NewComicPage } from "@comic-shared/page/types";
import { Query } from "@core-shared/express/types";
import { IMethods } from "@core/lib/types";
import { getResults } from "@core/lib/util";
import { Key } from "react";

export const pageServices = ({get, post, /*put,*/ patch, remove}: IMethods) => ({
    page: {
        create: (newPage:NewComicPage, file:File):Promise<IComicPage> => {
            const formData = new FormData();
            formData.append('file', file);
            return post("page", newPage).then(getResults<IComicPage>).then((page:IComicPage) => 
                post(`page/${page.id}/image`, formData).then(getResults)
            );
        },
        search: (arcId:string, q:Query = {}): Promise<IComicPage[]> => get(`page`, {...q, arcId}).then(getResults),
        searchAll: (q:Query = {}): Promise<IComicPage[]> => get(`page`, q).then(getResults),
        get: (pageId: string):Promise<IComicPage> => get(`page/${pageId}`).then(getResults),
        update: (pageId: string, page: Partial<IComicPage>):Promise<IComicPage> => patch(`page/${pageId}`, page).then(getResults),
        remove: (pageId: string):Promise<any> => remove(`page/${pageId}`),
        sort: (arcId:string, pageId:string, newIndex:number):Promise<IComicPage[]> => post(`page/sort`, {pageId, arcId, newIndex}).then(getResults),
        character: {
            search: (pageId:string):Promise<IComicCharacter[]> => get(`page/${pageId}/character`).then(getResults),
            add: (pageId:string, characterId:Key):Promise<any> => post(`page/${pageId}/character`, {characterId}).then(getResults),
            remove: (pageId:string, characterId:Key):Promise<any> => remove(`page/${pageId}/character/${characterId}`).then(getResults),
        }
    }
});