import { overridable } from "@core/lib/overridable";
import {PageNumberProps} from "./PageNumber.d";

export const PageNumberComponent = overridable(({ __layoutId, className, css, pageNumber}:PageNumberProps) => <>
    {css && <style>{css}</style>}
    <span className={className}>
        {!__layoutId && pageNumber}
        {__layoutId && "123"}
    </span>
</>);

