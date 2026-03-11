import { ILayoutEditorProps, LayoutEditor } from "@theming/lib/layout/componentRegistry";
import { PageNumberProps } from "./PageNumber";
import { PageNumberComponent } from "./PageNumber.component";

export const PageNumberLayoutEditor:LayoutEditor = ({
    __layoutId, __update, __isSelected,
    ...props
}:ILayoutEditorProps) => <PageNumberComponent
    {...props as PageNumberProps}
    pageNumber={123}
/>;