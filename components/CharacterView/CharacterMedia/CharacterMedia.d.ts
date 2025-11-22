import { IComicCharacter } from "@comic-shared/character/types";

export declare interface ICharacterMediaProps {
    media: ICharacterMedia[];
}

// What gets passed into the component from the parent as attributes
export declare interface ICharacterMediaInputProps {
    character: IComicCharacter;
    classes?: any;
}

export type CharacterMediaProps = ICharacterMediaInputProps & ICharacterMediaProps;