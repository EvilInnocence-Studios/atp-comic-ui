import { ICharacterAttribute, ICharacterMedia, IComicCharacter } from "@comic-shared/character/types";
import { IComicPage } from "@comic-shared/page/types";

export declare interface ICharacterViewProps {
    attributes: ICharacterAttribute[];
    media: ICharacterMedia[];
    pages: Array<{
        pageNumber: number | null;
        page: IComicPage | null;
    }>;
    goToPage: (url: string) => void;
}

// What gets passed into the component from the parent as attributes
export declare interface ICharacterViewInputProps {
    character: IComicCharacter;
}

export type CharacterViewProps = ICharacterViewInputProps & ICharacterViewProps;