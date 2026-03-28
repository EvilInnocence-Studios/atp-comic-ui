import { Editable } from "@core/components/Editable";
import { Label } from "@core/components/Label";
import { IArcThumbnailInputProps } from "./ArcThumbnail.d";

export const ArcThumbnailPropEditor = (
    {url}: IArcThumbnailInputProps,
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
