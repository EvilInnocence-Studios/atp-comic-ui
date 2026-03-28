import { Editable } from "@core/components/Editable";
import { Label } from "@core/components/Label";
import { IArcLinkInputProps } from "./ArcLink.d";

export const ArcLinkPropEditor = (
    {url}: IArcLinkInputProps,
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
