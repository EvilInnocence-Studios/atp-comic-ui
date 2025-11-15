import { IComicArc } from "@comic-shared/arc/types";
import { IComicUserPreferences } from "@comic/lib/useUserPreferences";

export declare interface ISubArcViewProps {
    subArcs: IComicArc[];
    subPages: (arcId: string) => IComicPage[];
    pageNumber: (pageId: string) => number | null;
}

// What gets passed into the component from the parent as attributes
export declare interface ISubArcViewInputProps {
    arcId: string;
}

export type SubArcViewProps = ISubArcViewInputProps & ISubArcViewProps & IComicUserPreferences;