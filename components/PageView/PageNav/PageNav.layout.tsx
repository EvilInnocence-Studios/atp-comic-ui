import { IComicArc } from "@comic-shared/arc/types";
import { IComicPage } from "@comic-shared/page/types";
import { ILayoutEditorProps, LayoutEditor } from "@theming/lib/layout/componentRegistry";
import { PageNavComponent } from "./PageNav.component";

export const PageNavLayoutEditor:LayoutEditor = ({
    ...props
}:ILayoutEditorProps) => <PageNavComponent
    {...props as any}
    arc={{} as IComicArc}
    firstPage={{url: "first-page"} as IComicPage}
    prevPage={{url: "prev-page"} as IComicPage}
    nextPage={{url: "next-page"} as IComicPage}
    lastPage={{url: "last-page"} as IComicPage}
/>;
