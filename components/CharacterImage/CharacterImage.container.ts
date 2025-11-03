import { useCharacterImage, useComicImageHost } from "@comic/lib/caching";
import { overridable } from "@core/lib/overridable";
import { createInjector, inject, mergeProps } from "unstateless";
import { CharacterImageComponent } from "./CharacterImage.component";
import { CharacterImageProps, ICharacterImageInputProps, ICharacterImageProps } from "./CharacterImage.d";

const injectCharacterImageProps = createInjector(({characterId, imageId}:ICharacterImageInputProps):ICharacterImageProps => {
    const [image, isLoading] = useCharacterImage(characterId, imageId);
    const imgHost = useComicImageHost(characterId);

    return {image, isLoading, imgHost};
});

const connect = inject<ICharacterImageInputProps, CharacterImageProps>(mergeProps(
    injectCharacterImageProps,
));

export const CharacterImage = overridable<ICharacterImageInputProps>(connect(CharacterImageComponent));
