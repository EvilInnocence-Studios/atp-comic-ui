import { IComicCharacter } from "@comic-shared/character/types";

export declare interface ICharacterManagerProps {
    characters: IComicCharacter[];
    isLoading: boolean;
    refresh: () => void;
    selectedCharacter: IComicCharacter | null;
    setSelectedCharacter: (character: IComicCharacter | null) => () => void;
    sort: (characterId: string, newIndex: number) => void;
}

// What gets passed into the component from the parent as attributes
export declare interface ICharacterManagerInputProps {
    characterId?: string;
}

export type CharacterManagerProps = ICharacterManagerInputProps & ICharacterManagerProps;