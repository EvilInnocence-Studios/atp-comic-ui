import { IComicPage } from "@comic-shared/page/types";
import { IToggle } from "@core/lib/useToggle";

export declare interface IPageTranscriptProps {
    page: IComicPage | null;
    transcript: IToggle;    
}

// What gets passed into the component from the parent as attributes
export declare interface IPageTranscriptInputProps {
    className?: string;
    css?: string;
    classes?: any;
    slots?: Index<ILayoutComponent[]>;
    __layoutId?: string;
    url?: string;
}

export type PageTranscriptProps = IPageTranscriptInputProps & IPageTranscriptProps;
