import { overridable } from "@core/lib/overridable";
import {ArcTitleProps} from "./ArcTitle.d";

export const ArcTitleComponent = overridable(({className, css, arc}:ArcTitleProps) => <>
    {css && <style>{css}</style>}
    <div className={className}>{arc?.name || ""}</div>
</>);

