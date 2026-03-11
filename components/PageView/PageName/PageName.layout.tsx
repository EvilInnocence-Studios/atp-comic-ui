import { ILayoutEditorProps, LayoutEditor } from "@theming/lib/layout/componentRegistry";
import { PageNameComponent } from "./PageName.component";
import { PageNameProps } from "./PageName";

export const PageNameLayoutEditor:LayoutEditor = ({
    __layoutId, __update, __isSelected,
    ...props
}:ILayoutEditorProps) => <PageNameComponent
    {...props as PageNameProps}
    page={{
        ...props.page,
        name: "Page Name Goes Here"
    }}
/>;