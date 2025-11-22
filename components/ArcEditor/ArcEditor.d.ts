import { IComicArc } from "@comic-shared/arc/types";
import { IUpdater } from "@core/lib/useUpdater";

export declare interface IArcEditorProps extends IUpdater<IComicArc> {
    uploadThumbnail: (file: File) => void;
    removeThumbnail: () => void;
    uploadBanner: (file: File) => void;
    removeBanner: () => void;
    setParent: (parentId: string | null) => void;
    moveUp: () => void;
    moveDown: () => void;
}

// What gets passed into the component from the parent as attributes
export declare interface IArcEditorInputProps {
    arc: IComicArc;
    refresh: () => void;
    allArcs: IComicArc[];
    classes?: any;
}

export type ArcEditorProps = IArcEditorInputProps & IArcEditorProps;