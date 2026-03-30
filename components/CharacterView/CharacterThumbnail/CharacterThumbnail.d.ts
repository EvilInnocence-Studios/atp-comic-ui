import { ICharacterContextProps } from "@comic/lib/context";
import { ILayoutComponent } from "@theming/lib/layout/componentRegistry";

export declare interface ICharacterThumbnailProps {

}

// What gets passed into the component from the parent as attributes
export declare interface ICharacterThumbnailInputProps {
    className?: string;
    css?: string;
    classes?: any;
    slots?: Index<ILayoutComponent[]>;
    __layoutId?: string;
    id?: string | null;
}

export type CharacterThumbnailProps = ICharacterThumbnailInputProps & ICharacterContextProps & ICharacterThumbnailProps;
