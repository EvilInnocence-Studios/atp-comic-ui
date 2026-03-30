import { useStory } from "@comic/lib/useStory";
import { overridable } from "@core/lib/overridable";
import { createInjector, inject, mergeProps } from "unstateless";
import { CharacterMediaComponent } from "./CharacterMedia.component";
import { CharacterMediaProps, ICharacterMediaInputProps, ICharacterMediaProps } from "./CharacterMedia.d";

const injectCharacterMediaProps = createInjector(({character}:ICharacterMediaInputProps):ICharacterMediaProps => {
    const story = useStory();
    const media = story.character.media(character.id);

    return {media};
});

const connect = inject<ICharacterMediaInputProps, CharacterMediaProps>(mergeProps(
    injectCharacterMediaProps,
));
export const connectCharacterMedia = connect;

export const CharacterMedia = overridable<ICharacterMediaInputProps>(connect(CharacterMediaComponent));
