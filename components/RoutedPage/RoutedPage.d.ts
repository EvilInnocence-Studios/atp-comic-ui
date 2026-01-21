export declare interface IRoutedPageProps {
    url: string;
}

// What gets passed into the component from the parent as attributes
export declare interface IRoutedPageInputProps {
    className?: string;
    css?: string;
    classes?: any;
    slots?: Index<ILayoutComponent[]>;
    __layoutId?: string;
}

export type RoutedPageProps = IRoutedPageInputProps & IRoutedPageProps;
