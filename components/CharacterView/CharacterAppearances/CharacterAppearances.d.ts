import { ICharacterContextProps } from "@comic/lib/context";
import { ILayoutComponent } from "@theming/lib/layout/componentRegistry";

export declare interface ICharacterAppearancesProps {
    pages: Array<{
        pageNumber: number | null;
        page: IComicPage | null;
    }>;
    arcs: Array<{
        arcNumber: number | null;
        arc: IArc | null;
        typeName: string;
    }>;
    goToPage: (url: string) => void;
    goToArc: (url: string) => void;
}

// What gets passed into the component from the parent as attributes
export declare interface ICharacterAppearancesInputProps {
    className?: string;
    css?: string;
    classes?: any;
    slots?: Index<ILayoutComponent[]>;
    __layoutId?: string;
    id?: string | null;
    rootArc?: string;
}

export type CharacterAppearancesProps = ICharacterAppearancesInputProps & ICharacterContextProps & ICharacterAppearancesProps;
