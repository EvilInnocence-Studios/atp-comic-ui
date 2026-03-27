import { Editable } from "@core/components/Editable";
import { Label } from "@core/components/Label";
import { IArcBannerInputProps } from "./ArcBanner.d";

export const ArcBannerPropEditor = (
    {url}: IArcBannerInputProps,
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
