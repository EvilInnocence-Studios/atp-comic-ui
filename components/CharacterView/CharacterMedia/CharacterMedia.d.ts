import { ICharacterMedia } from "@comic-shared/character/types";
import { ICharacterContextProps } from "@comic/lib/context";
import { ILayoutComponent } from "@theming/lib/layout/componentRegistry";

export declare interface ICharacterMediaProps {
    media: ICharacterMedia[];
}

// What gets passed into the component from the parent as attributes
export declare interface ICharacterMediaInputProps {
    className?: string;
    css?: string;
    classes?: any;
    slots?: Index<ILayoutComponent[]>;
    __layoutId?: string;
    id?: string | null;
}

export type CharacterMediaProps = ICharacterMediaInputProps & ICharacterContextProps & ICharacterMediaProps;
