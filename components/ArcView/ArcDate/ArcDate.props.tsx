import { Label } from "@core/components/Label";
import { IArcDateInputProps } from "./ArcDate.d";
import { Editable } from "@core/components/Editable";
import { Select } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

const formatOptions = [
    {value: "", label: "Custom"},
    {value: "MMMM D, YYYY", label: "January 1, 2026"},
    {value: "MMM D, YYYY", label: "Jan 1, 2026"},
    {value: "dddd, MMMM D, YYYY", label: "Thursday, January 1, 2026"},
    {value: "ddd, MMM D, YYYY", label: "Thu, Jan 1, 2026"},
    {value: "MM/DD/YYYY", label: "01/01/2026 (US)"},
    {value: "DD/MM/YYYY", label: "01/01/2026 (UK)"},
    {value: "YYYY-MM-DD", label: "2026-01-01 (ISO)"},
    {value: "MMMM YYYY", label: "January 2026"},
    {value: "MMMM D", label: "January 1"},
    {value: "MMM D", label: "Jan 1"},
    {value: "dddd", label: "Thursday"},
    {value: "YYYY", label: "2026"},
]

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
            <Select
                value={format || ""}
                onChange={updateProp("format")}
                placeholder="Custom"
                options={formatOptions}
            />
        </Label>
        <div style={{textAlign: "right"}}>
            <a href="https://day.js.org/docs/en/display/format" target="_blank">
                <FontAwesomeIcon icon={faQuestion} /> Date format help
            </a>
        </div>
    </>;
}
