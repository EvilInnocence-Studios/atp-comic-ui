import { overridable } from "@core/lib/overridable";
import dayjs from "dayjs";
import { ArcDateProps } from "./ArcDate.d";

export const ArcDateComponent = overridable(({className, css, arc, format}:ArcDateProps) => <>
    {css && <style>{css}</style>}
    <span className={className}>
        {dayjs(arc?.postDate).format(format || "MMMM D, YYYY")}
    </span>
</>);

