import { Editable } from "@core/components/Editable";
import { Label } from "@core/components/Label";
import { IPageTranscriptInputProps } from "./PageTranscript.d";

export const PageTranscriptPropEditor = (
    {url}: IPageTranscriptInputProps,
    _updateProps: (props: any) => void,
    updateProp: (prop: string) => (value: any) => void
) => {
    return (
        <Label label="Page Url">
            <Editable
                value={url || ""}
                onChange={updateProp("url")}
            />
        </Label>
    );
}
