import { IComicPage } from "@comic-shared/page/types";

export declare interface IArcPagesProps {
    pages: IComicPage[];
    arc: IComicArc;
    isVerticalScroll: boolean;
}

// What gets passed into the component from the parent as attributes
export declare interface IArcPagesInputProps {
    url: string | null;
    classes?: any;
}

export type ArcPagesProps = IArcPagesInputProps & IArcPagesProps;