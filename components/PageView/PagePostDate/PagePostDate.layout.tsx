import { ILayoutEditorProps, LayoutEditor } from "@theming/lib/layout/componentRegistry";
import { PagePostDateProps } from "./PagePostDate";
import { PagePostDateComponent } from "./PagePostDate.component";

export const PagePostDateLayoutEditor:LayoutEditor = ({
    __layoutId, __update, __isSelected,
    ...props
}:ILayoutEditorProps) => <PagePostDateComponent
    {...props as PagePostDateProps}
    page={{
        ...props.page,
        postDate: "2000-01-01T00:00:00.000Z"
    }}
/>;