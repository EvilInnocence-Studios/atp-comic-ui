import { Editable } from "@core/components/Editable";
import { Label } from "@core/components/Label";
import { IArcPageNumberListInputProps } from "./ArcPageNumberList.d";

export const ArcPageNumberListPropEditor = (
    {url}: IArcPageNumberListInputProps,
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
