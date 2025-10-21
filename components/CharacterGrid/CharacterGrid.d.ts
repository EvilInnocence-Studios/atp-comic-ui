import { IComicCharacter } from "@comic-shared/character/types";

export declare interface ICharacterGridProps {

}

// What gets passed into the component from the parent as attributes
export declare interface ICharacterGridInputProps {
    characters: IComicCharacter[];
}

export type CharacterGridProps = ICharacterGridInputProps & ICharacterGridProps;