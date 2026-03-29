import { Label } from "@core/components/Label";
import { IArcParentLinksInputProps } from "./ArcParentLinks.d";
import { Editable } from "@core/components/Editable";
import { Select, Switch } from "antd";

export const ArcParentLinksPropEditor = (
    {url, show = "all", full, hideIfEmpty}: IArcParentLinksInputProps,
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
        <Label label="Show">
            <Select
                value={show}
                onChange={updateProp("show")}
                options={[
                    { value: "all", label: "All" },
                    { value: "root", label: "Root" },
                    { value: "parent", label: "Parent" },
                ]}
            />
        </Label>
        <Switch
            checked={full}
            onChange={updateProp("full")}
            checkedChildren="Full Title (Book 5: My Book)"
            unCheckedChildren="Short Title (My Book)"
        />
        <Switch
            checked={hideIfEmpty}
            onChange={updateProp("hideIfEmpty")}
            checkedChildren="Hide If Empty"
            unCheckedChildren="Show If Empty"
        />
    </>;
}
