import { IComicCharacter } from "@comic-shared/character/types";
import { services } from "@core/lib/api";
import { overridable } from "@core/lib/overridable";
import { useLoaderAsync } from "@core/lib/useLoader";
import { useEffect, useState } from "react";
import { prop, sort } from "ts-functional";
import { createInjector, inject, mergeProps } from "unstateless";
import { CharactersPageComponent } from "./CharactersPage.component";
import { CharactersPageProps, ICharactersPageInputProps, ICharactersPageProps } from "./CharactersPage.d";
import { useSetting } from "@common/lib/setting/services";

const injectCharactersPageProps = createInjector(({}:ICharactersPageInputProps):ICharactersPageProps => {
    const [characters, setCharacters] = useState<IComicCharacter[]>([]);
    const mode = useSetting("comic.CharacterPageDisplayMode");
    const loader = useLoaderAsync();

    useEffect(() => {
        loader(() => services().character.search({}).then(setCharacters));
    }, []);
    
    return {
        characters: characters.filter(prop("enabled")).sort(sort.by(prop<any, any>("sortOrder")).asc),
        isLoading: loader.isLoading,
        mode,
    };
});

const connect = inject<ICharactersPageInputProps, CharactersPageProps>(mergeProps(
    injectCharactersPageProps,
));

export const CharactersPage = overridable<ICharactersPageInputProps>(connect(CharactersPageComponent));
