import { CharacterSelect } from "@comic/components/CharacterSelect";
import { ICharacterThumbnailInputProps } from "./CharacterThumbnail.d";

export const CharacterThumbnailPropEditor = (
    { id }: ICharacterThumbnailInputProps,
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
