import { CharacterSelect } from "../CharacterSelect";
import { ICharacterViewInputProps } from "./CharacterView.d";

export const CharacterViewPropEditor = (
    {id}: ICharacterViewInputProps,
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
