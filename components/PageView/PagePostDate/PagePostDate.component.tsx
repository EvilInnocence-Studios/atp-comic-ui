import { Date } from "@core/components/Date";
import { overridable } from "@core/lib/overridable";
import { PagePostDateProps } from "./PagePostDate.d";
import styles from './PagePostDate.module.scss';

export const PagePostDateComponent = overridable(({classes = styles, slots, __layoutId, className, css, page}:PagePostDateProps) => <>
    {css && <style>{css}</style>}
    <span className={className}>
        {!__layoutId && <Date date={page?.postDate} />}
        {__layoutId && <Date date={"2000-01-01T00:00:00.000Z"} />}
    </span>
</>);

