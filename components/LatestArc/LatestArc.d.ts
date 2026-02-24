export declare interface ILatestArcProps {
    latestArcUrl?: string;
}

// What gets passed into the component from the parent as attributes
export declare interface ILatestArcInputProps {
    className?: string;
    css?: string;
    classes?: any;
    slots?: Index<ILayoutComponent[]>;
    __layoutId?: string;
    arcId?: string;
}

export type LatestArcProps = ILatestArcInputProps & ILatestArcProps;
