import { CharacterSelect } from "@comic/components/CharacterSelect";
import { ICharacterMediaInputProps } from "./CharacterMedia.d";

export const CharacterMediaPropEditor = (
    { id }: ICharacterMediaInputProps,
    _updateProps: (props: any) => void,
    updateProp: (prop: string) => (value: any) => void
) => {
    return <>
        <CharacterSelect
            characterId={id || ""}
            onChange={(characterId) => updateProp("id")(characterId)}
        />
    </>;
}
