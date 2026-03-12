import { Editable } from "@core/components/Editable";
import { Label } from "@core/components/Label";
import { IPageImageInputProps } from "./PageImage.d";

export const PageImagePropEditor = (
    {url}: IPageImageInputProps,
    _updateProps: (props: any) => void,
    updateProp: (prop: string) => (value: any) => void
) => {
    return (
        <div>
            <Label label="Page Url">
                <Editable
                    value={url || ""}
                    onChange={updateProp("url")}
                />
            </Label>
        </div>
    );
}
