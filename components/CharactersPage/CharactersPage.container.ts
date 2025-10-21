import { createInjector, inject, mergeProps } from "unstateless";
import {CharactersPageComponent} from "./CharactersPage.component";
import {ICharactersPageInputProps, CharactersPageProps, ICharactersPageProps} from "./CharactersPage.d";
import { useEffect, useState } from "react";
import { IComicCharacter } from "@comic-shared/character/types";
import { useLoaderAsync } from "@core/lib/useLoader";
import { services } from "@core/lib/api";
import { prop, sort } from "ts-functional";

const injectCharactersPageProps = createInjector(({}:ICharactersPageInputProps):ICharactersPageProps => {
    const [characters, setCharacters] = useState<IComicCharacter[]>([]);
    const loader = useLoaderAsync();

    useEffect(() => {
        loader(() => services().character.search({}).then(setCharacters));
    }, []);
    
    return {characters: characters.sort(sort.by(prop<any, any>("order")).asc), isLoading: loader.isLoading};
});

const connect = inject<ICharactersPageInputProps, CharactersPageProps>(mergeProps(
    injectCharactersPageProps,
));

export const CharactersPage = connect(CharactersPageComponent);
