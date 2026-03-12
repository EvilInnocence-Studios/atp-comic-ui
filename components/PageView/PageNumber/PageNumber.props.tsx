import { Editable } from "@core/components/Editable";
import { Label } from "@core/components/Label";
import { IPageNumberInputProps } from "./PageNumber.d";

export const PageNumberPropEditor = (
    {url}: IPageNumberInputProps,
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
