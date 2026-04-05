import { ILayoutComponent } from "@theming/lib/layout/componentRegistry";

export declare interface ICharacterViewProps {

}

// What gets passed into the component from the parent as attributes
export declare interface ICharacterViewInputProps {
    className?: string;
    css?: string;
    classes?: any;
    slots?: Index<ILayoutComponent[]>;
    __layoutId?: string;
    id?: string | null;
}

export type CharacterViewProps = ICharacterViewInputProps & ICharacterViewProps;
