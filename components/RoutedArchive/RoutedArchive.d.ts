export declare interface IRoutedArchiveProps {
    url: string;
}

// What gets passed into the component from the parent as attributes
export declare interface IRoutedArchiveInputProps {
    className?: string;
    css?: string;
    classes?: any;
    slots?: Index<ILayoutComponent[]>;
    __layoutId?: string;
}

export type RoutedArchiveProps = IRoutedArchiveInputProps & IRoutedArchiveProps;
