import { overridable } from "@core/lib/overridable";
import { SlotRenderer } from "@theming/components/SlotRenderer";
import { Link } from "react-router";
import { ArcLinkProps } from "./ArcLink.d";

export const ArcLinkComponent = overridable(({slots, __layoutId, className, css, url}:ArcLinkProps) => <>
    {css && <style>{css}</style>}
    <Link to={`/comic/arc/${url}`} className={className}>
        <SlotRenderer slots={slots?.children} parentId={__layoutId} slotName="children" componentName=""/>
    </Link>
</>);

