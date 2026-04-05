import { IComicCharacter } from "@comic-shared/character/types";
import { services } from "@core/lib/api";
import { overridable } from "@core/lib/overridable";
import { useEffect, useState } from "react";
import { createInjector, inject, mergeProps } from "unstateless";
import { CharacterSelectComponent } from "./CharacterSelect.component";
import { CharacterSelectProps, ICharacterSelectInputProps, ICharacterSelectProps } from "./CharacterSelect.d";

const injectCharacterSelectProps = createInjector(({}:ICharacterSelectInputProps):ICharacterSelectProps => {
    const [characters, setCharacters] = useState<IComicCharacter[]>([]);

    useEffect(() => {
        services().character.search().then(setCharacters);
    }, []);
    
    return {characters};
});

const connect = inject<ICharacterSelectInputProps, CharacterSelectProps>(mergeProps(
    injectCharacterSelectProps,
));
export const connectCharacterSelect = connect;

export const CharacterSelect = overridable<ICharacterSelectInputProps>(connect(CharacterSelectComponent));
