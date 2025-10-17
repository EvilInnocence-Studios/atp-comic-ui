import { IComicArc } from "@comic-shared/arc/types";
import { IComicPage } from "@comic-shared/page/types";

export declare interface IPageNavProps {
    prevPage: IComicPage | null;
    nextPage: IComicPage | null;
    firstPage: IComicPage | null;
    lastPage: IComicPage | null;
    arc: IComicArc | null;
}

// What gets passed into the component from the parent as attributes
export declare interface IPageNavInputProps {
    page: IComicPage;
    top?: boolean;
    bottom?: boolean;
}

export type PageNavProps = IPageNavInputProps & IPageNavProps;