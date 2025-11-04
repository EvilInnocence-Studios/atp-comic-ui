import { IComicArc } from "@comic-shared/arc/types";
import { IComicPage } from "@comic-shared/page/types";
import { ArchiveViewMode, IComicUserPreferences, SortOrder } from "@comic/lib/useUserPreferences";
import { Setter } from "unstateless";

export declare type BreadCrumbMode = "full" | "parent" | "none";

export declare interface IArcViewProps {
    arc: IComicArc | null;
    parents: IComicArc[];
    subArcs: IComicArc[];
    pages: IComicPage[];

    showDetails: boolean;
    showBanner: boolean;
    showViewModeToggle: boolean;
    showSortOrderToggle: boolean;
    breadCrumbMode: BreadCrumbMode;
    showBar: boolean;

    subPages: (arcId: string) => IComicPage[];
    pageNumber: (pageId: string) => number | null;
    arcTypeName: (arc?: IComicArc | null) => string;
    arcNumber: (arcId:string) => number | null;
}

// What gets passed into the component from the parent as attributes
export declare interface IArcViewInputProps {
    url: string;
}

export type ArcViewProps = IArcViewInputProps & IArcViewProps & IComicUserPreferences;