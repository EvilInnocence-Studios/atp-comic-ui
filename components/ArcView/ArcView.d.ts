import { IComicArc } from "@comic-shared/arc/types";
import { IComicPage } from "@comic-shared/page/types";

export declare interface IArcViewProps {
    arc: IComicArc | null;
    parents: IComicArc[];
    subArcs: IComicArc[];
    pages: IComicPage[];
}

// What gets passed into the component from the parent as attributes
export declare interface IArcViewInputProps {
    url: string;
}

export type ArcViewProps = IArcViewInputProps & IArcViewProps;