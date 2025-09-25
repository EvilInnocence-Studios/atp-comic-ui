import { IComicArc } from "@comic-shared/arc/types";
import { IComicPage } from "@comic-shared/page/types";
import { IToggle } from "@core/lib/useToggle";

export declare interface IPageViewProps {
    page: IComicPage | null;
    pageNumber: number;
    nextPage: IComicPage | null;
    transcript: IToggle;
}

// What gets passed into the component from the parent as attributes
export declare interface IPageViewInputProps {
    url: string;
}

export type PageViewProps = IPageViewInputProps & IPageViewProps;