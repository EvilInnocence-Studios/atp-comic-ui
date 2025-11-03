import { ICharacterMedia } from "@comic-shared/character/types";
import { services } from "@core/lib/api";
import { flash } from "@core/lib/flash";
import { overridable } from "@core/lib/overridable";
import { useLoaderAsync } from "@core/lib/useLoader";
import { useEffect, useState } from "react";
import { createInjector, inject, mergeProps } from "unstateless";
import { CharacterMediaEditorComponent } from "./CharacterMediaEditor.component";
import { CharacterMediaEditorProps, ICharacterMediaEditorInputProps, ICharacterMediaEditorProps } from "./CharacterMediaEditor.d";

const injectCharacterMediaEditorProps = createInjector(({character, update}:ICharacterMediaEditorInputProps):ICharacterMediaEditorProps => {
    const [media, setMedia] = useState<ICharacterMedia[]>([]);
    const loader = useLoaderAsync();

    const refresh = () => {
        if(!!character) {
            loader(() => services().character.media.search(character.id)
                .then(setMedia)
                .catch(flash.error('Failed to load media'))
            );
        }
    }

    useEffect(refresh, [character.id]);
    
    const upload = (file: File) => {
        loader(() => services().character.media.upload(character.id, file)
            .then(flash.success("Image uploaded"))
            .then(refresh)
            .catch(flash.error("Failed to upload image"))
        );
    }

    const remove = (id:string) => () => {
        loader(() => services().character.media.remove(character.id, id)
            .then(flash.success("Image removed"))
            .then(() => {
                setMedia(old => old.filter(m => m.id !== id))
            })
            .catch(flash.error("Failed to remove image"))
        );
    }

    const updateThumbnail = update("thumbnailId");
    const updateMainImage = update("mainImageId");
    
    const sort = (id:string, newIndex: number) => {
        loader(() => services().character.media.sort(character.id, id, newIndex).then(setMedia));
    }

    return {media, upload, isLoading: loader.isLoading, updateThumbnail, updateMainImage, remove, sort};
});

const connect = inject<ICharacterMediaEditorInputProps, CharacterMediaEditorProps>(mergeProps(
    injectCharacterMediaEditorProps,
));

export const CharacterMediaEditor = overridable<ICharacterMediaEditorInputProps>(connect(CharacterMediaEditorComponent));
