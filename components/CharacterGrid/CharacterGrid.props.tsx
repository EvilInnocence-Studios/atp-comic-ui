import { ICharacterGridInputProps } from "./CharacterGrid.d";

export const CharacterGridPropEditor = (
    {}: ICharacterGridInputProps,
    _updateProps: (props: any) => void,
    _updateProp: (prop: string) => (value: any) => void
) => {
    return <>
        Placeholder Prop Editor for CharacterGrid
    </>;
}
