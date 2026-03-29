import { overridable } from "@core/lib/overridable";
import {ArcTitleProps} from "./ArcTitle.d";
import { ArcType } from "../ArcType";
import { ArcNumber } from "../ArcNumber";

export const ArcTitleComponent = overridable(({className, css, arc, full}:ArcTitleProps) => <>
    {css && <style>{css}</style>}
    <span className={className}>
        {full && <><ArcType /> <ArcNumber />: </>}
        {arc?.name || ""}
    </span>
</>);

