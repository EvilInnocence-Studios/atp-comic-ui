import { IComicArc } from "@comic-shared/arc/types";

export declare interface IArcTitleProps {
    arc: IComicArc | null;
}

// What gets passed into the component from the parent as attributes
export declare interface IArcTitleInputProps {
    className?: string;
    css?: string;
    classes?: any;
    slots?: Index<ILayoutComponent[]>;
    __layoutId?: string;
    url?: string;
    full?: boolean;
}

export type ArcTitleProps = IArcTitleInputProps & IArcTitleProps;
