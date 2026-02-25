import { ICharacterAttribute, ICharacterMedia, IComicCharacter, NewCharacterAttribute, NewComicCharacter } from "@comic-shared/character/types";
import { IMethods } from "@core/lib/types";
import { getResults } from "@core/lib/util";

export const characterServices = ({get, post, /*put,*/ patch, remove}: IMethods) => ({
    character: {
        create: (character:NewComicCharacter):Promise<IComicCharacter> => post('character', character).then(getResults),
        search: (q?: {}): Promise<IComicCharacter[]> => get('character', q).then(getResults),
        get: (id: string):Promise<IComicCharacter> => get(`character/${id}`).then(getResults),
        update: (id: string, character: Partial<IComicCharacter>):Promise<IComicCharacter> => patch(`character/${id}`, character).then(getResults),
        remove: (id: string):Promise<any> => remove(`character/${id}`),
        sort: (characterId:string, newIndex:number):Promise<IComicCharacter[]> => post(`character/sort`, {characterId, newIndex}).then(getResults),
        pages: (characterId:string):Promise<string[]> => get(`character/${characterId}/pages`).then(getResults),
        attribute: {
            search: (characterId:string):Promise<ICharacterAttribute[]> => get(`character/${characterId}/attribute`).then(getResults),
            create: (characterId:string, attribute:Partial<NewCharacterAttribute>):Promise<ICharacterAttribute> => post(`character/${characterId}/attribute`, attribute).then(getResults),
            update: (characterId:string, attributeId:string, attribute:Partial<ICharacterAttribute>):Promise<ICharacterAttribute> => patch(`character/${characterId}/attribute/${attributeId}`, attribute).then(getResults),
            remove: (characterId:string, attributeId:string):Promise<null> => remove(`character/${characterId}/attribute/${attributeId}`),
            sort: (characterId:string, attributeId:string, newIndex:number):Promise<ICharacterAttribute[]> => post(`character/${characterId}/attribute/sort`, {attributeId, newIndex}).then(getResults),
        },
        media: {
            upload: (characterId:string, file:File) => {
                const formData = new FormData();
                formData.append('file', file);
                return post(`character/${characterId}/media`, formData).then(getResults);
            },
            get: (characterId:string, mediaId:string):Promise<ICharacterMedia> => get(`character/${characterId}/media/${mediaId}`).then(getResults),
            search: (characterId:string):Promise<ICharacterMedia[]> => get(`character/${characterId}/media`).then(getResults),
            remove: (characterId:string, mediaId:string) => remove(`character/${characterId}/media/${mediaId}`),
            sort: (characterId:string, id:string, newIndex:number):Promise<ICharacterMedia[]> => post(`character/${characterId}/media/sort`, {id, newIndex}).then(getResults),
        },
    }
});