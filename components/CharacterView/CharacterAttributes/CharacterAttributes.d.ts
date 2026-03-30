import { ICharacterContextProps } from "@comic/lib/context";
import { ICharacterAttribute } from "@comic/lib/types";
import { ILayoutComponent } from "@theming/lib/layout/componentRegistry";

export declare interface ICharacterAttributesProps {
    attributes: ICharacterAttribute[];  
}

// What gets passed into the component from the parent as attributes
export declare interface ICharacterAttributesInputProps {
    className?: string;
    css?: string;
    classes?: any;
    slots?: Index<ILayoutComponent[]>;
    __layoutId?: string;
    id?: string | null;
}

export type CharacterAttributesProps = ICharacterAttributesInputProps & ICharacterContextProps & ICharacterAttributesProps;
