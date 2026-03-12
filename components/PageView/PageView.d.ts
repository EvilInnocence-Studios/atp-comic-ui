import { IComicArc } from "@comic-shared/arc/types";
import { IComicPage } from "@comic-shared/page/types";
import { IToggle } from "@core/lib/useToggle";

export declare interface IPageViewProps {
    page: IComicPage | null;
}

// What gets passed into the component from the parent as attributes
export declare interface IPageViewInputProps {
    className?: string;
    css?: string;
    classes?: any;
    slots?: Index<ILayoutComponent[]>;
    __layoutId?: string;
    url?: string;
}

export type PageViewProps = IPageViewInputProps & IPageViewProps;