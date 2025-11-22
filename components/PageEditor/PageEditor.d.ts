import { IComicPage } from "@comic-shared/page/types";
import { IUpdater } from "@core/lib/useUpdater";

export declare interface IPageEditorProps extends IUpdater<IComicPage> {
    page: IComicPage;
    isLoading: boolean;
    refresh: () => void;
}

// What gets passed into the component from the parent as attributes
export declare interface IPageEditorInputProps {
    arcId: string;
    pageId: string;
    classes?: any;
}

export type PageEditorProps = IPageEditorInputProps & IPageEditorProps;