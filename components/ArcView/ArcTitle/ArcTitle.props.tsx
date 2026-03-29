import { Editable } from "@core/components/Editable";
import { Label } from "@core/components/Label";
import { IArcTitleInputProps } from "./ArcTitle.d";
import { Switch } from "antd";

export const ArcTitlePropEditor = (
    {url, full}: IArcTitleInputProps,
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
            checked={full}
            onChange={updateProp("full")}
            checkedChildren="Full Title (Book 5: My Story)"
            unCheckedChildren="Short Title (My Book)"
        />
    </>;
}
