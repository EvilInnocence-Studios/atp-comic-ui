import { ICharacterContextProps } from "@comic/lib/context";
import { ILayoutComponent } from "@theming/lib/layout/componentRegistry";

export declare interface ICharacterBioProps {

}

// What gets passed into the component from the parent as attributes
export declare interface ICharacterBioInputProps {
    className?: string;
    css?: string;
    classes?: any;
    slots?: Index<ILayoutComponent[]>;
    __layoutId?: string;
    id?: string | null;
}

export type CharacterBioProps = ICharacterBioInputProps & ICharacterContextProps & ICharacterBioProps;
