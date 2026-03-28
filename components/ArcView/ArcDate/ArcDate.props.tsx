import { Label } from "@core/components/Label";
import { IArcDateInputProps } from "./ArcDate.d";
import { Editable } from "@core/components/Editable";

export const ArcDatePropEditor = (
    {url, format}: IArcDateInputProps,
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
        <Label label="Format">
            <Editable
                value={format || ""}
                onChange={updateProp("format")}
                placeholder="MMMM D, YYYY"
            />
        </Label>
        <a href="https://day.js.org/docs/en/display/format" target="_blank">Day.js Format</a>
    </>;
}
