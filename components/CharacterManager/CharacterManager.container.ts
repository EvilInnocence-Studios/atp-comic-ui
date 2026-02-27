import { IComicCharacter } from "@comic-shared/character/types";
import { services } from "@core/lib/api";
import { overridable } from "@core/lib/overridable";
import { useLoaderAsync } from "@core/lib/useLoader";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { prop, sort } from "ts-functional";
import { createInjector, inject, mergeProps } from "unstateless";
import { CharacterManagerComponent } from "./CharacterManager.component";
import { CharacterManagerProps, ICharacterManagerInputProps, ICharacterManagerProps } from "./CharacterManager.d";

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

    const createCharacter = () => {
        loader(() => services().character.create({
            name: "New Character",
            sortOrder: Math.max(...characters.map(c => c.sortOrder)) + 1,
            enabled: false,
            thumbnailId: null,
            mainImageId: null,
            showDetails: false,
            bio: "",
        }).then(newChar => {
            refresh();
            setSelectedCharacter(newChar)();
        }));
    };

    const selectedCharacter = characterId ? characters.find(c => c.id === characterId) || null : null;

    const sortChars = (characterId: string, newIndex: number) => {
        loader(() => services().character.sort(characterId, newIndex).then(setCharacters));
    }

    return {
        characters: characters.sort(sort.by(prop<any, any>("sortOrder")).asc),
        createCharacter,
        isLoading: loader.isLoading,
        selectedCharacter, setSelectedCharacter,
        refresh,
        sort: sortChars,
    };
});

const connect = inject<ICharacterManagerInputProps, CharacterManagerProps>(mergeProps(
    injectCharacterManagerProps,
));
export const connectCharacterManager = connect;

export const CharacterManager = overridable<ICharacterManagerInputProps>(connect(CharacterManagerComponent));
