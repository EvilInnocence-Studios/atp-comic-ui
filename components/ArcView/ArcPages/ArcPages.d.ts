import { IComicPage } from "@comic-shared/page/types";

export declare interface IArcPagesProps {
    pages: IComicPage[];
}

// What gets passed into the component from the parent as attributes
export declare interface IArcPagesInputProps {
    url: string | null;
}

export type ArcPagesProps = IArcPagesInputProps & IArcPagesProps;