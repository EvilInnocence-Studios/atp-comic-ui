export declare interface IPageNavProps {
    prevPage: IComicPage | null;
    nextPage: IComicPage | null;
    firstPage: IComicPage | null;
    lastPage: IComicPage | null;
    arc: IComicArc | null;
}

// What gets passed into the component from the parent as attributes
export declare interface IPageNavInputProps {
    className?: string;
    css?: string;
    classes?: any;
    slots?: Index<ILayoutComponent[]>;
    __layoutId?: string;
    name?: string;
    url?: string;
    top?: boolean;
    bottom?: boolean;
}

export type PageNavProps = IPageNavInputProps & IPageNavProps;
