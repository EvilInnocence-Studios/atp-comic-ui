import { IComicCharacter } from "@comic-shared/character/types";

export declare interface ICharacterViewProps {

}

// What gets passed into the component from the parent as attributes
export declare interface ICharacterViewInputProps {
    character: IComicCharacter;
}

export type CharacterViewProps = ICharacterViewInputProps & ICharacterViewProps;