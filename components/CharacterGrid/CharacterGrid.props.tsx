import { ICharacterGridInputProps } from "./CharacterGrid.d";

export const CharacterGridPropEditor = (
    {}: ICharacterGridInputProps,
    updateProps: (props: any) => void,
    updateProp: (prop: string) => (value: any) => void
) => {
    return <>
        Placeholder Prop Editor for CharacterGrid
    </>;
}
