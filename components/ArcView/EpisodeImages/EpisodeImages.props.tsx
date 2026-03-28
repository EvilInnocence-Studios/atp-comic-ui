import { IEpisodeImagesInputProps } from "./EpisodeImages.d";
import { Editable } from "@core/components/Editable";
import { Label } from "@core/components/Label";

export const EpisodeImagesPropEditor = (
    {url}: IEpisodeImagesInputProps,
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
