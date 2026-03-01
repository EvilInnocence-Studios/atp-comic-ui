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
    characterId: string;
    classes?: any;
}

export type CharacterAppearancesProps = ICharacterAppearancesInputProps & ICharacterAppearancesProps;