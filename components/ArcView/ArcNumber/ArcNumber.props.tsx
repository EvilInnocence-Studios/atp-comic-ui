import { Editable } from "@core/components/Editable";
import { Label } from "@core/components/Label";
import { IArcNumberInputProps } from "./ArcNumber.d";
import { Switch } from "antd";

export const ArcNumberPropEditor = (
    {url, mode}: IArcNumberInputProps,
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
        <Switch
            checkedChildren="Relative"
            unCheckedChildren="Absolute"
            checked={mode === "relative"}
            onChange={updateProp("mode")}
        />
    </>;
}
