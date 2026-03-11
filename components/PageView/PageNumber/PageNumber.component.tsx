import { overridable } from "@core/lib/overridable";
import {PageNumberProps} from "./PageNumber.d";

export const PageNumberComponent = overridable(({ className, css, pageNumber}:PageNumberProps) => <>
    {css && <style>{css}</style>}
    <span className={className}>
        {pageNumber}
    </span>
</>);

