import { IComicArc } from "@comic-shared/arc/types";
import { IComicUserPreferences } from "@comic/lib/useUserPreferences";

export declare interface ISubArcViewProps {
    subArcs: IComicArc[];
    subPages: (arcId: string) => IComicPage[];
    pageNumber: (pageId: string) => number | null;
    isVerticalScroll: boolean;
}

// What gets passed into the component from the parent as attributes
export declare interface ISubArcViewInputProps {
    arcId: string;
    classes?: any;
}

export type SubArcViewProps = ISubArcViewInputProps & ISubArcViewProps & IComicUserPreferences;