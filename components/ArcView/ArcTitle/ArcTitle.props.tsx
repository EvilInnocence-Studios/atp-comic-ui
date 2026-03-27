import { IArcTitleInputProps } from "./ArcTitle.d";

export const ArcTitlePropEditor = (
    {}: IArcTitleInputProps,
    updateProps: (props: any) => void,
    updateProp: (prop: string) => (value: any) => void
) => {
    return (
        <div>
            Placeholder Prop Editor for ArcTitle
        </div>
    );
}
