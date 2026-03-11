import { overridable } from "@core/lib/overridable";
import { PageNameProps } from "./PageName.d";

export const PageNameComponent = overridable(({ className, css, page}:PageNameProps) => <>
    {css && <style>{css}</style>}
    <span className={className}>
        {page?.name}
    </span>
</>);

