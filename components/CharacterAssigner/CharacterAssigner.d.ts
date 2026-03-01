import { IComicCharacter } from "@comic-shared/character/types";
import { Key } from "react";

export declare interface ICharacterAssignerProps {
    allCharacters: IComicCharacter[];
    assigned: IComicCharacter[];
    onChange: (nextTargetKeys: Key[], direction: string, moveKeys: Key[]) => void;
    isLoading: boolean;
}

// What gets passed into the component from the parent as attributes
export type ICharacterAssignerInputProps = {
    classes?: any;
} & (
        | { pageId: string; arcId?: never }
        | { arcId: string; pageId?: never }
    );

export type CharacterAssignerProps = ICharacterAssignerInputProps & ICharacterAssignerProps;