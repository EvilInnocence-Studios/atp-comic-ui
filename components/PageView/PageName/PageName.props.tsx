import { IPageNameInputProps } from "./PageName.d";

export const PageNamePropEditor = (
    {}: IPageNameInputProps,
    updateProps: (props: any) => void,
    updateProp: (prop: string) => (value: any) => void
) => {
    return (
        <div>
            Placeholder Prop Editor for PageName
        </div>
    );
}
