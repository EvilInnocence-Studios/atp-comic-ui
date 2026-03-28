import { Switch } from "antd";
import { ISubArcListInputProps } from "./SubArcList.d";
import { Label } from "@core/components/Label";
import { Editable } from "@core/components/Editable";

export const SubArcListPropEditor = (
    {url, mode}: ISubArcListInputProps,
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
            checked={mode === "comicVerticalScrollEpisodeListItem"}
            onChange={(checked) => updateProp("mode")(checked ? "comicVerticalScrollEpisodeListItem" : "comicArcListItem")}
            checkedChildren="Vertical Scroll"
            unCheckedChildren="Paged"
        />
    </>;
}
