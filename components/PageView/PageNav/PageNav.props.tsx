import { IPageNavInputProps } from "./PageNav.d";

export const PageNavPropEditor = (
    {}: IPageNavInputProps,
    updateProps: (props: any) => void,
    updateProp: (prop: string) => (value: any) => void
) => {
    return (
        <div>
            Placeholder Prop Editor for PageNav
        </div>
    );
}
