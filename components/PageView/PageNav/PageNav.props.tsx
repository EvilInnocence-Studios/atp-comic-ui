import { Editable } from "@core/components/Editable";
import { Label } from "@core/components/Label";
import { IPageNavInputProps } from "./PageNav.d";

export const PageNavPropEditor = (
    {url}: IPageNavInputProps,
    _updateProps: (props: any) => void,
    updateProp: (prop: string) => (value: any) => void
) => {
    return (
        <Label label="Page Url">
            <Editable
                value={url || ""}
                onChange={updateProp("url")}
            />
        </Label>
    );
}
