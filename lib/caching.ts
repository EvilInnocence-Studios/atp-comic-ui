import { ICharacterMedia } from "@comic-shared/character/types";
import { useSetting } from "@common/lib/setting/services";
import { services } from "@core/lib/api";
import { useLoaderAsync } from "@core/lib/useLoader";
import { useEffect, useState } from "react";
import { memoizePromise } from "ts-functional";

const loadImage = memoizePromise((characterId:string, imageId:string) => services().character.media.get(characterId, imageId));

export const useCharacterImage = (characterId:string, imageId:string | null):[ICharacterMedia | null, boolean] => {
    const [image, setImage] = useState<ICharacterMedia | null>(null);
    const loader = useLoaderAsync();

    useEffect(() => {
        if(!!imageId) {
            loader(async () => 
                loadImage(characterId, imageId)
                    .then(setImage)
            );
        }
    }, [characterId, imageId]);

    return [!!image ? image : null, loader.isLoading];
}

export const useComicImageHost = (id:string) => {
    const imgHost = useSetting("imageHost");
    const imgFolder = useSetting("comicMediaFolder");
    return `${imgHost}/${imgFolder}/${id}/`;
}
