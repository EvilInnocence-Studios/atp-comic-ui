import { IComicArc } from "@comic-shared/arc/types";
import { IComicUserPreferences } from "@comic/lib/useUserPreferences";

export declare interface IVerticalScrollChapterViewProps {
    arc: IComicArc | null;
    chapters: (IComicArc & {index:number})[];
}

// What gets passed into the component from the parent as attributes
export declare interface IVerticalScrollChapterViewInputProps {
    arcId: string;
    classes?: any;
}

export type VerticalScrollChapterViewProps = IVerticalScrollChapterViewInputProps & IVerticalScrollChapterViewProps & IComicUserPreferences;