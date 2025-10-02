import { IComicArc } from "@comic-shared/arc/types";
import { IComicPage } from "@comic-shared/page/types";
import { Setter } from "unstateless";

export declare interface IArcViewProps {
    arc: IComicArc | null;
    parents: IComicArc[];
    subArcs: IComicArc[];
    pages: IComicPage[];
    subPages: (arcId: string) => IComicPage[];
    pageNumber: (pageId: string) => number | null;
    arcTypeName: (arc?: IComicArc | null) => string;
    mode: string;
    setMode: Setter<string>;
}

// What gets passed into the component from the parent as attributes
export declare interface IArcViewInputProps {
    url: string;
}

export type ArcViewProps = IArcViewInputProps & IArcViewProps;