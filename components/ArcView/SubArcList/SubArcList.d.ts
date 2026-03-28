import { IComicArc } from "@comic-shared/arc/types";
import { ILayoutComponent } from "@theming/lib/layout/componentRegistry";

export declare interface ISubArcListProps {
    arcs: IComicArc[];
}

// What gets passed into the component from the parent as attributes
export declare interface ISubArcListInputProps {
    className?: string;
    css?: string;
    classes?: any;
    slots?: Index<ILayoutComponent[]>;
    __layoutId?: string;
    url?: string;
    mode?: "comicArcListItem" | "comicVerticalScrollEpisodeListItem";
}

export type SubArcListProps = {arc: IComicArc | null} & ISubArcListInputProps & ISubArcListProps;
