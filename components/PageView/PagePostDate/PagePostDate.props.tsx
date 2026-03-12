import { Editable } from "@core/components/Editable";
import { Label } from "@core/components/Label";
import { IPagePostDateInputProps } from "./PagePostDate.d";

export const PagePostDatePropEditor = (
    {url}: IPagePostDateInputProps,
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
