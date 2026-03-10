import { IComicPage } from "@comic-shared/page/types";

export declare interface IPageNameProps {
    page: IComicPage | null;
}

// What gets passed into the component from the parent as attributes
export declare interface IPageNameInputProps {
    className?: string;
    css?: string;
    classes?: any;
    slots?: Index<ILayoutComponent[]>;
    __layoutId?: string;
    url?: string;
}

export type PageNameProps = IPageNameInputProps & IPageNameProps;
