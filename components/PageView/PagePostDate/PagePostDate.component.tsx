import { Date } from "@core/components/Date";
import { overridable } from "@core/lib/overridable";
import { PagePostDateProps } from "./PagePostDate.d";

export const PagePostDateComponent = overridable(({className, css, page}:PagePostDateProps) => <>
    {css && <style>{css}</style>}
    <span className={className}>
        <Date date={page?.postDate || ""} />
    </span>
</>);

