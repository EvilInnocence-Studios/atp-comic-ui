import { overridable } from "@core/lib/overridable";
import { ArcNumberProps } from "./ArcNumber.d";

export const ArcNumberComponent = overridable(({className, css, arcNumber}:ArcNumberProps) => <>
    {css && <style>{css}</style>}
    <span className={className}>{arcNumber}</span>
</>);

