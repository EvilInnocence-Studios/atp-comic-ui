import { overridable } from "@core/lib/overridable";
import { ArcTranscriptProps } from "./ArcTranscript.d";

export const ArcTranscriptComponent = overridable(({className, css, arc}:ArcTranscriptProps) => <>
    {css && <style>{css}</style>}
    <div className={className}>{arc.transcript}</div>
</>);

