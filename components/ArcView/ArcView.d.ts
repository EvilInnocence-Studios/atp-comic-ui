import { IComicArc } from "@comic-shared/arc/types";
import { IComicPage } from "@comic-shared/page/types";
import { ArchiveViewMode, IComicUserPreferences, SortOrder } from "@comic/lib/useUserPreferences";
import { Setter } from "unstateless";
import { IArcSettings } from "./ArcView.helpers";

export declare type BreadCrumbMode = "full" | "parent" | "none";

export declare interface IArcViewProps {
    arc: IComicArc | null;
    parents: IComicArc[];
    subArcs: IComicArc[];
    isVerticalScroll: boolean;
}

// What gets passed into the component from the parent as attributes
export declare interface IArcViewInputProps {
    url: string;
    classes?: any;
    className?: string;
}

export type ArcViewProps = IArcViewInputProps & IArcViewProps & IComicUserPreferences & IArcSettings;