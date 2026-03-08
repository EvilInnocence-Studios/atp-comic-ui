export declare interface IPageImageProps {
    pageUrl: string;
    page: IComicPage | null;
    nextPage: IComicPage | null;
}

// What gets passed into the component from the parent as attributes
export declare interface IPageImageInputProps {
    className?: string;
    css?: string;
    classes?: any;
    slots?: Index<ILayoutComponent[]>;
    __layoutId?: string;
    url?: string;
}

export type PageImageProps = IPageImageInputProps & IPageImageProps;
