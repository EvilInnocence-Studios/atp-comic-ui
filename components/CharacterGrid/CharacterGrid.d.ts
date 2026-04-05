import { IComicCharacter } from "@comic-shared/character/types";
import { ILayoutComponent } from "@theming/lib/layout/componentRegistry";

export declare interface ICharacterGridProps {
    characters: IComicCharacter[];
    mode: string;
    selectedCharacter: IComicCharacter | null;
    setSelectedCharacter: Setter<IComicCharacter | null>;
    close: () => void;
    next: () => void;
    prev: () => void;
}

// What gets passed into the component from the parent as attributes
export declare interface ICharacterGridInputProps {
    className?: string;
    css?: string;
    classes?: any;
    slots?: Index<ILayoutComponent[]>;
    __layoutId?: string;
    characterIds?: string[];
}

export type CharacterGridProps = ICharacterGridInputProps & ICharacterGridProps;
