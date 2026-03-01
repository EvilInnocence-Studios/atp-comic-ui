import { IComicArc, NewComicArc } from "@comic-shared/arc/types";
import { IComicCharacter } from "@comic-shared/character/types";
import { IMethods } from "@core/lib/types";
import { getResults } from "@core/lib/util";
import { Key } from "react";

export const arcServices = ({ get, post, /*put,*/ patch, remove }: IMethods) => ({
    arc: {
        create: (arc: NewComicArc): Promise<IComicArc> => post('arc', arc).then(getResults),
        search: (q?: {}): Promise<IComicArc[]> => get('arc', q).then(getResults),
        get: (id: string): Promise<IComicArc> => get(`arc/${id}`).then(getResults),
        update: (id: string, arc: Partial<IComicArc>): Promise<IComicArc> => patch(`arc/${id}`, arc).then(getResults),
        remove: (id: string): Promise<any> => remove(`arc/${id}`),
        thumbnail: {
            upload: (arcId: string, file: File) => {
                const formData = new FormData();
                formData.append('file', file);
                return post(`arc/${arcId}/thumbnail`, formData).then(getResults);
            },
            remove: (arcId: string) => remove(`arc/${arcId}/thumbnail`),
        },
        banner: {
            upload: (arcId: string, file: File) => {
                const formData = new FormData();
                formData.append('file', file);
                return post(`arc/${arcId}/banner`, formData).then(getResults);
            },
            remove: (arcId: string) => remove(`arc/${arcId}/banner`),
        },
        sort: (parentId: string, childArcId: string, newIndex: number) => post(`arc/${parentId}/sort`, { childArcId, newIndex }).then(getResults),
        character: {
            search: (arcId: string): Promise<IComicCharacter[]> => get(`arc/${arcId}/character`).then(getResults),
            add: (arcId: string, characterId: Key): Promise<any> => post(`arc/${arcId}/character`, { characterId }).then(getResults),
            remove: (arcId: string, characterId: Key): Promise<any> => remove(`arc/${arcId}/character/${characterId}`).then(getResults),
        }
    }
});