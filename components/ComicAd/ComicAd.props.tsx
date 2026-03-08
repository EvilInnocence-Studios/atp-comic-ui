import { IComicAdInputProps } from "./ComicAd.d";
import { Label } from "@core/components/Label";
import { Editable } from "@core/components/Editable";
import { MediaPicker } from "@common/components/MediaPicker";
import { Input } from "antd";
import { onInputChange } from "@core/lib/onInputChange";

export const ComicAdPropEditor = (
    { code, width, height, defaultAdId, defaultAdLink }: IComicAdInputProps,
    _updateProps: (props: IComicAdInputProps) => void,
    updateProp: (prop: string) => (value: any) => void
) => {
    return <>
        <Label label="Code">
            <Editable value={code} onChange={updateProp("code")} />
        </Label>
        <Label label="Width">
            <Input type="number" value={width} onChange={onInputChange(updateProp("width"))} />
        </Label>
        <Label label="Height">
            <Input type="number" value={height} onChange={onInputChange(updateProp("height"))} />
        </Label>
        <p><b>Default Ad</b></p>
        <MediaPicker imageId={defaultAdId} onSelect={updateProp("defaultAdId")} />
        <Label label="Default Ad Link">
            <Editable value={defaultAdLink || ""} onChange={updateProp("defaultAdLink")} />
        </Label>
    </>;
}

export const SizedComicAdPropEditor = (
    { code, defaultAdId, defaultAdLink }: IComicAdInputProps,
    _updateProps: (props: IComicAdInputProps) => void,
    updateProp: (prop: string) => (value: any) => void
) => {
    return <>
        <Label label="Code">
            <Editable value={code} onChange={updateProp("code")} />
        </Label>
        <p><b>Default Ad</b></p>
        <MediaPicker imageId={defaultAdId} onSelect={updateProp("defaultAdId")} />
        <Label label="Default Ad Link">
            <Editable value={defaultAdLink || ""} onChange={updateProp("defaultAdLink")} />
        </Label>
    </>;
}
