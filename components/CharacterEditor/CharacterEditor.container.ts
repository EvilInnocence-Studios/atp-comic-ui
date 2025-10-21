import { createInjector, inject, mergeProps } from "unstateless";
import {CharacterEditorComponent} from "./CharacterEditor.component";
import {ICharacterEditorInputProps, CharacterEditorProps, ICharacterEditorProps} from "./CharacterEditor.d";
import { useUpdater } from "@core/lib/useUpdater";
import { IComicCharacter } from "@comic-shared/character/types";
import { services } from "@core/lib/api";

const injectCharacterEditorProps = createInjector(({character, refresh}:ICharacterEditorInputProps):ICharacterEditorProps => {
    const updater = useUpdater<IComicCharacter>(
        "character",
        character.id,
        character,
        services().character.get,
        services().character.update,
        "manual",
        () => refresh
    )
    
    return {...updater};
});

const connect = inject<ICharacterEditorInputProps, CharacterEditorProps>(mergeProps(
    injectCharacterEditorProps,
));

export const CharacterEditor = connect(CharacterEditorComponent);
