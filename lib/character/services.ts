import { IComicCharacter, NewComicCharacter } from "@comic-shared/character/types";
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
    }
});