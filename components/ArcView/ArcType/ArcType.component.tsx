import { overridable } from "@core/lib/overridable";
import { ArcTypeProps } from "./ArcType.d";

export const ArcTypeComponent = overridable(({className, css, typeName}:ArcTypeProps) => <>
    {css && <style>{css}</style>}
    <span className={className}>{typeName}</span>
</>);

