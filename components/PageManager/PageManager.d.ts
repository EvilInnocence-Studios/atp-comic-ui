import { IComicPage } from "@comic-shared/page/types";

export declare interface IPageManagerProps {
    pages: IComicPage[];
    isLoading: boolean;
    refresh: () => void;
    remove: (pageId: string) => () => void;
    upload: (file: File) => Promise<IComicPage>;
    onUploadSuccess: (pages: IComicPage[]) => void;
    enableAll: () => void;
    disableAll: () => void;
}

// What gets passed into the component from the parent as attributes
export declare interface IPageManagerInputProps {
    arcId: string;
    classes?: any;
}

export type PageManagerProps = IPageManagerInputProps & IPageManagerProps;