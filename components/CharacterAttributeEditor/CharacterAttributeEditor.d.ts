import { ICharacterAttribute } from "@comic-shared/character/types";

export declare interface ICharacterAttributeEditorProps {
    attributes: ICharacterAttribute[];
    isLoading: boolean;
    name: string;
    setName: Setter<string>;
    value: string;
    setValue: Setter<string>;
    create: () => void;
    update: (id: string, field: keyof ICharacterAttribute) => (value: any) => void;
    remove: (id: string) => () => void;
    sort: (id: string, newIndex: number) => void;
}

// What gets passed into the component from the parent as attributes
export declare interface ICharacterAttributeEditorInputProps {
    characterId: string;
    classes?: any;
}

export type CharacterAttributeEditorProps = ICharacterAttributeEditorInputProps & ICharacterAttributeEditorProps;