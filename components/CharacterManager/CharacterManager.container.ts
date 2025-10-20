import { IComicCharacter } from "@comic-shared/character/types";
import { services } from "@core/lib/api";
import { useLoaderAsync } from "@core/lib/useLoader";
import { useEffect, useState } from "react";
import { prop, sort } from "ts-functional";
import { createInjector, inject, mergeProps } from "unstateless";
import { CharacterManagerComponent } from "./CharacterManager.component";
import { CharacterManagerProps, ICharacterManagerInputProps, ICharacterManagerProps } from "./CharacterManager.d";
import { useNavigate } from "react-router";

const injectCharacterManagerProps = createInjector(({characterId}:ICharacterManagerInputProps):ICharacterManagerProps => {
    const [characters, setCharacters] = useState<IComicCharacter[]>([]);
    const loader = useLoaderAsync();
    const navigate = useNavigate();

    const refresh = () => {
        loader(() => services().character.search({}).then(setCharacters));
    }

    useEffect(refresh, []);
    
    const setSelectedCharacter = (character: IComicCharacter | null) => () => {
        if (character) {
            navigate(`/comic/character/${character.id}`);
        } else {
            navigate(`/comic/character`);
        }
    };

    const selectedCharacter = characterId ? characters.find(c => c.id === characterId) || null : null;

    const sortChars = (characterId: string, newIndex: number) => {
        loader(() => services().character.sort(characterId, newIndex).then(setCharacters));
    }

    return {
        characters: characters.sort(sort.by(prop<any, any>("sortOrder")).asc),
        isLoading: loader.isLoading,
        selectedCharacter, setSelectedCharacter,
        refresh,
        sort: sortChars,
    };
});

const connect = inject<ICharacterManagerInputProps, CharacterManagerProps>(mergeProps(
    injectCharacterManagerProps,
));

export const CharacterManager = connect(CharacterManagerComponent);
