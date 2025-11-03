import { IComicCharacter } from "@comic-shared/character/types";
import { Setter } from "unstateless";

export declare interface ICharacterGridProps {
    mode: string;
    selectedCharacter: IComicCharacter | null;
    setSelectedCharacter: Setter<IComicCharacter | null>;
    close: () => void;
    next: () => void;
    prev: () => void;
}

// What gets passed into the component from the parent as attributes
export declare interface ICharacterGridInputProps {
    characters: IComicCharacter[];
}

export type CharacterGridProps = ICharacterGridInputProps & ICharacterGridProps;