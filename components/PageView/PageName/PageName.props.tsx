import { Editable } from "@core/components/Editable";
import { Label } from "@core/components/Label";
import { IPageNameInputProps } from "./PageName.d";

export const PageNamePropEditor = (
    {url}: IPageNameInputProps,
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
