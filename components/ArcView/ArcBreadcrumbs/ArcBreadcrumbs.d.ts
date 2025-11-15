import { IComicArc } from "@comic-shared/arc/types";
import { IArcSettings } from "../ArcView.helpers";
import { IComicUserPreferences } from "@comic/lib/useUserPreferences";

export declare interface IArcBreadcrumbsProps {
    subArcs: IComicArc[];
    parents: IComicArc[];
    arc: IComicArc | null;
}

// What gets passed into the component from the parent as attributes
export declare interface IArcBreadcrumbsInputProps {
    url: string | null;
}

export type ArcBreadcrumbsProps = IArcBreadcrumbsInputProps & IArcBreadcrumbsProps & IArcSettings & IComicUserPreferences;