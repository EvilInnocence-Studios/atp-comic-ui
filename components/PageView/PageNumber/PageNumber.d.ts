export declare interface IPageNumberProps {
    pageNumber: number;
}

// What gets passed into the component from the parent as attributes
export declare interface IPageNumberInputProps {
    className?: string;
    css?: string;
    classes?: any;
    slots?: Index<ILayoutComponent[]>;
    __layoutId?: string;
    url?: string;
}

export type PageNumberProps = IPageNumberInputProps & IPageNumberProps;
