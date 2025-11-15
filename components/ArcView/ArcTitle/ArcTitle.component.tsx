import { overridable } from "@core/lib/overridable";
import { ArcTitleProps } from "./ArcTitle.d";

export const ArcTitleComponent = overridable(({arc, arcNumber, arcTypeName, lineBreak}:ArcTitleProps) =>
    <>{arcTypeName(arc)} {arcNumber(arc.id) }: {lineBreak && <br/>}{arc.name}</>
);
