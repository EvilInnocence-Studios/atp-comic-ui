import { overridable } from "@core/lib/overridable";
import { ArcDescriptionProps } from "./ArcDescription.d";

export const ArcDescriptionComponent = overridable(({className, css, arc}:ArcDescriptionProps) => <>
    {css && <style>{css}</style>}
    <div className={className}>{arc?.summary}</div>
</>);

