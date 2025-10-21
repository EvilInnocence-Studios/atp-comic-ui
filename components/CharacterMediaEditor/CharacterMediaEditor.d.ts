import { ICharacterMedia, IComicCharacter } from "@comic-shared/character/types";

export declare interface ICharacterMediaEditorProps {
    media: ICharacterMedia[];
    upload: (file: File) => void;
    isLoading: boolean;
    updateThumbnail: (id:string) => void;
    updateMainImage: (id:string) => void;
    remove: (id:string) => () => void;
    sort: (id: string, newIndex: number) => void;
}

// What gets passed into the component from the parent as attributes
export declare interface ICharacterMediaEditorInputProps {
    character: IComicCharacter;
    update: (field:keyof IComicCharacter) => (value:string) => void;
}

export type CharacterMediaEditorProps = ICharacterMediaEditorInputProps & ICharacterMediaEditorProps;