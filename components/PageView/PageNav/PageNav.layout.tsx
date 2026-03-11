import { ILayoutEditorProps, LayoutEditor } from "@theming/lib/layout/componentRegistry";
import { PageNavComponent } from "./PageNav.component";
import { PageNavProps } from "./PageNav";
import { IComicPage } from "@comic-shared/page/types";
import { IComicArc } from "@comic-shared/arc/types";

export const PageNavLayoutEditor:LayoutEditor = ({
    __layoutId, __update, __isSelected,
    ...props
}:ILayoutEditorProps) => <PageNavComponent
    {...props as PageNavProps}
    arc={{} as IComicArc}
    firstPage={{} as IComicPage}
    prevPage={{} as IComicPage}
    nextPage={{} as IComicPage}
    lastPage={{} as IComicPage}
/>;
