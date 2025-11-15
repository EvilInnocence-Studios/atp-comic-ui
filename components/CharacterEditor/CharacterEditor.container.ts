import { IComicCharacter } from "@comic-shared/character/types";
import { services } from "@core/lib/api";
import { overridable } from "@core/lib/overridable";
import { useUpdater } from "@core/lib/useUpdater";
import { createInjector, inject, mergeProps } from "unstateless";
import { CharacterEditorComponent } from "./CharacterEditor.component";
import { CharacterEditorProps, ICharacterEditorInputProps, ICharacterEditorProps } from "./CharacterEditor.d";

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
export const connectCharacterEditor = connect;

export const CharacterEditor = overridable<ICharacterEditorInputProps>(connect(CharacterEditorComponent));
