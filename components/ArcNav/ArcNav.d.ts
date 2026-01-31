import { IComicArc } from "@comic-shared/arc/types";

export declare interface IArcNavProps {
    prevArc: IComicArc | null;
    nextArc: IComicArc | null;
    firstArc: IComicArc | null;
    latestArc: IComicArc | null;
    linkType: string;
}

// What gets passed into the component from the parent as attributes
export declare interface IArcNavInputProps {
    arc: IComicArc;
    top?: boolean;
    bottom?: boolean;
    classes?: any;
}

export type ArcNavProps = IArcNavInputProps & IArcNavProps;
