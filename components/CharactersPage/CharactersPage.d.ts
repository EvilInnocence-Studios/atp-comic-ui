import { IComicCharacter } from "@comic-shared/character/types";

export declare interface ICharactersPageProps {
    characters: IComicCharacter[];
    isLoading: boolean;
}

// What gets passed into the component from the parent as attributes
export declare interface ICharactersPageInputProps {

}

export type CharactersPageProps = ICharactersPageInputProps & ICharactersPageProps;