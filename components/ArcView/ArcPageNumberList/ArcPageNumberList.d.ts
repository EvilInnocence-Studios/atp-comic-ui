import { ILayoutComponent } from "@theming/lib/layout/componentRegistry";
import { IComicPage } from "@comic/lib/types";

export declare interface IArcPageNumberListProps {
    pages: IComicPage[];
    pageNumber: (pageId: string) => number | null;
}

// What gets passed into the component from the parent as attributes
export declare interface IArcPageNumberListInputProps {
    className?: string;
    css?: string;
    classes?: any;
    slots?: Index<ILayoutComponent[]>;
    __layoutId?: string;
    url?: string;
}

export type ArcPageNumberListProps = IArcPageNumberListInputProps & {arc: IComicArc | null} & IArcPageNumberListProps;
