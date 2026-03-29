import { IComicArc } from "@comic-shared/arc/types";
import { ILayoutEditorProps, LayoutEditor } from "@theming/lib/layout/componentRegistry";
import { ArcNavComponent } from "./ArcNav.component";

export const ArcNavLayoutEditor:LayoutEditor = ({css, className, ...props}:ILayoutEditorProps) =>
    <ArcNavComponent
    {...props as any}
    arc={{} as IComicArc}
    firstArc={{url: "first-arc"} as IComicArc}
    prevArc={{url: "prev-arc"} as IComicArc}
    nextArc={{url: "next-arc"} as IComicArc}
    latestArc={{url: "last-arc"} as IComicArc}
    archiveArc={{url: "archive-arc"} as IComicArc}
/>;