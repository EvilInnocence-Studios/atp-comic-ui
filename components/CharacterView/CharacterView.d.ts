import { ICharacterAttribute, IComicCharacter } from "@comic-shared/character/types";
import { IComicPage } from "@comic-shared/page/types";

export declare interface ICharacterViewProps {
    attributes: ICharacterAttribute[];
    pages: Array<{
        pageNumber: number | null;
        page: IComicPage | null;
    }>;
}

// What gets passed into the component from the parent as attributes
export declare interface ICharacterViewInputProps {
    character: IComicCharacter;
}

export type CharacterViewProps = ICharacterViewInputProps & ICharacterViewProps;