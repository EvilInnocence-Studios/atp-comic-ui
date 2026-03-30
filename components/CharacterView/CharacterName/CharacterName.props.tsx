import { CharacterSelect } from "@comic/components/CharacterSelect";
import { ICharacterNameInputProps } from "./CharacterName.d";

export const CharacterNamePropEditor = (
    { id }: ICharacterNameInputProps,
    _updateProps: (props: any) => void,
    updateProp: (prop: string) => (value: any) => void
) => <>
        <CharacterSelect
            characterId={id || null}
            onChange={updateProp("id")}
        />
    </>;
