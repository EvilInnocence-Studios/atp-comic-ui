import { IArcPagesInputProps } from "./ArcPages.d";

export const ArcPagesPropEditor = (
    {}: IArcPagesInputProps,
    updateProps: (props: any) => void,
    updateProp: (prop: string) => (value: any) => void
) => {
    return <>
        Placeholder Prop Editor for ArcPages
    </>;
}
