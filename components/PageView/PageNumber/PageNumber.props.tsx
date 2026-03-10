import { IPageNumberInputProps } from "./PageNumber.d";

export const PageNumberPropEditor = (
    {}: IPageNumberInputProps,
    updateProps: (props: any) => void,
    updateProp: (prop: string) => (value: any) => void
) => {
    return (
        <div>
            Placeholder Prop Editor for PageNumber
        </div>
    );
}
