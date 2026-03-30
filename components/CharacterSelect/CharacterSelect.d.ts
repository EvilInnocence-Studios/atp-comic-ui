export declare interface ICharacterSelectProps {
    characters: IComicCharacter[];
}

// What gets passed into the component from the parent as attributes
export declare interface ICharacterSelectInputProps {
    classes?: any;
    characterId: string | null;
    onChange: (characterId: string | null) => void;
}

export type CharacterSelectProps = ICharacterSelectInputProps & ICharacterSelectProps;