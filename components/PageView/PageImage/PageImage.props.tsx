import { IPageImageInputProps } from "./PageImage.d";

export const PageImagePropEditor = (
    {}: IPageImageInputProps,
    updateProps: (props: any) => void,
    updateProp: (prop: string) => (value: any) => void
) => {
    return (
        <div>
            Placeholder Prop Editor for PageImage
        </div>
    );
}
