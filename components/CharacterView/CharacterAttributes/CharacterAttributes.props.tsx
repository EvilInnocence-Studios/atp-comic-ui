import { CharacterSelect } from "@comic/components/CharacterSelect";
import { ICharacterAttributesInputProps } from "./CharacterAttributes.d";

export const CharacterAttributesPropEditor = (
    { id }: ICharacterAttributesInputProps,
    _updateProps: (props: any) => void,
    updateProp: (prop: string) => (value: any) => void
) => {
    return <>
        <CharacterSelect
            characterId={id || null}
            onChange={updateProp("id")}
        />
    </>;
}
