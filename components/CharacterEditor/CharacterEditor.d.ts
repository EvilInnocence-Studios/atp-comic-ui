import { IComicCharacter } from "@comic-shared/character/types";
import { IUpdater } from "@core/lib/useUpdater";

export declare interface ICharacterEditorProps extends IUpdater<IComicCharacter> {

}

// What gets passed into the component from the parent as attributes
export declare interface ICharacterEditorInputProps {
    character: IComicCharacter;
    refresh: () => void;
    classes?: any;
}

export type CharacterEditorProps = ICharacterEditorInputProps & ICharacterEditorProps;