import { IComicArc } from "@comic-shared/arc/types";
import { IComicPage } from "@comic-shared/page/types";
import { IToggle } from "@core/lib/useToggle";

export declare interface IPageViewProps {
    page: IComicPage | null;
}

// What gets passed into the component from the parent as attributes
export declare interface IPageViewInputProps {
    url?: string;
    classes?: any;
    className?: string;
}

export type PageViewProps = IPageViewInputProps & IPageViewProps;