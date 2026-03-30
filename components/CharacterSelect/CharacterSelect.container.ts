import { useStory } from "@comic/lib/useStory";
import { overridable } from "@core/lib/overridable";
import { createInjector, inject, mergeProps } from "unstateless";
import { CharacterSelectComponent } from "./CharacterSelect.component";
import { CharacterSelectProps, ICharacterSelectInputProps, ICharacterSelectProps } from "./CharacterSelect.d";

const injectCharacterSelectProps = createInjector(({}:ICharacterSelectInputProps):ICharacterSelectProps => {
    const story = useStory();
    
    return {characters: story.character.list()};
});

const connect = inject<ICharacterSelectInputProps, CharacterSelectProps>(mergeProps(
    injectCharacterSelectProps,
));
export const connectCharacterSelect = connect;

export const CharacterSelect = overridable<ICharacterSelectInputProps>(connect(CharacterSelectComponent));
