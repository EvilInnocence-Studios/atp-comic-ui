import { ICharacterMedia } from "@comic-shared/character/types";
import { services } from "@core/lib/api";
import { overridable } from "@core/lib/overridable";
import { useEffect, useState } from "react";
import { createInjector, inject, mergeProps } from "unstateless";
import { CharacterMediaComponent } from "./CharacterMedia.component";
import { CharacterMediaProps, ICharacterMediaInputProps, ICharacterMediaProps } from "./CharacterMedia.d";

const injectCharacterMediaProps = createInjector(({character}:ICharacterMediaInputProps):ICharacterMediaProps => {
    const [media, setMedia] = useState<ICharacterMedia[]>([]);

    useEffect(() => {
        services().character.media.search(character.id).then(mediaItems => {
            setMedia(mediaItems
                .filter(m => ![character.mainImageId, character.thumbnailId].includes(m.id))
                .sort((a, b) => (a.order || 0) - (b.order || 0))
            );
        });
    }, [character.id]);

    return {media};
});

const connect = inject<ICharacterMediaInputProps, CharacterMediaProps>(mergeProps(
    injectCharacterMediaProps,
));

export const CharacterMedia = overridable<ICharacterMediaInputProps>(connect(CharacterMediaComponent));
export const connectCharacterMedia = connect;