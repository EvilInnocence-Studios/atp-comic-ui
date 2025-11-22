import { ICharacterAttribute } from "@comic-shared/character/types";

export declare interface ICharacterAttributesProps {
    attributes: ICharacterAttribute[];
}

// What gets passed into the component from the parent as attributes
export declare interface ICharacterAttributesInputProps {
    characterId: string;
    classes?: any;
}

export type CharacterAttributesProps = ICharacterAttributesInputProps & ICharacterAttributesProps;