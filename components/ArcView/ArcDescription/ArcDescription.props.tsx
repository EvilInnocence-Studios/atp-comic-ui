import { Editable } from "@core/components/Editable";
import { Label } from "@core/components/Label";
import { IArcDescriptionInputProps } from "./ArcDescription.d";

export const ArcDescriptionPropEditor = (
    {url}: IArcDescriptionInputProps,
    _updateProps: (props: any) => void,
    updateProp: (prop: string) => (value: any) => void
) => {
    return <>
        <Label label="Url">
            <Editable
                value={url || ""}
                onChange={updateProp("url")}
            />
        </Label>
    </>;
}
