import { IComicArc } from "@comic-shared/arc/types";

export declare interface IArcTitleProps {
    arcTypeName: (arc?: IComicArc | null) => string;
    arcNumber: (arcId: string) => number | null;
}

// What gets passed into the component from the parent as attributes
export declare interface IArcTitleInputProps {
    arc: IComicArc;
    lineBreak?: boolean;
    classes?: any;
}

export type ArcTitleProps = IArcTitleInputProps & IArcTitleProps;