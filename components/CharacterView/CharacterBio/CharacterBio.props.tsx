import { CharacterSelect } from "@comic/components/CharacterSelect";
import { ICharacterBioInputProps } from "./CharacterBio.d";

export const CharacterBioPropEditor = (
    { id }: ICharacterBioInputProps,
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
