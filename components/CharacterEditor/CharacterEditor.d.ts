import { IComicCharacter } from "@comic-shared/character/types";

export declare interface ICharacterEditorProps {

}

// What gets passed into the component from the parent as attributes
export declare interface ICharacterEditorInputProps {
    character: IComicCharacter;
}

export type CharacterEditorProps = ICharacterEditorInputProps & ICharacterEditorProps;