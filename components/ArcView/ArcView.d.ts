import { IComicArc } from "@comic-shared/arc/types";

export declare interface IArcViewProps {
    arc: IComicArc | null;
    isVerticalScroll: boolean;
    hasPages: boolean;
}

// What gets passed into the component from the parent as attributes
export declare interface IArcViewInputProps {
    url: string;
    classes?: any;
    className?: string;
}

export type ArcViewProps = IArcViewInputProps & IArcViewProps;