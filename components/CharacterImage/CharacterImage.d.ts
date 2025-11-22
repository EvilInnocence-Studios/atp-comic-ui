import { ICharacterMedia } from "@comic-shared/character/types";

export declare interface ICharacterImageProps {
    image: ICharacterMedia | null;
    isLoading: boolean;
    imgHost: string;
}

// What gets passed into the component from the parent as attributes
export declare interface ICharacterImageInputProps {
    characterId: string;
    imageId: string | null;
    classes?: any;
}

export type CharacterImageProps = ICharacterImageInputProps & ICharacterImageProps;