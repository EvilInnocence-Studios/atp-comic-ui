import { Label } from "@core/components/Label";
import { IArcNavInputProps } from "./ArcNav.d";
import { Editable } from "@core/components/Editable";

export const ArcNavPropEditor = (
    {url}: IArcNavInputProps,
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
