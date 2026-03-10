import { IPagePostDateInputProps } from "./PagePostDate.d";

export const PagePostDatePropEditor = (
    {}: IPagePostDateInputProps,
    updateProps: (props: any) => void,
    updateProp: (prop: string) => (value: any) => void
) => {
    return (
        <div>
            Placeholder Prop Editor for PagePostDate
        </div>
    );
}
