import { IComicArc } from "@comic-shared/arc/types";

export declare interface IArcNodeProps {
    arc: IComicArc;
    arcId?: string;
    allArcs: IComicArc[];
    level: number;
    onCreate: (parentId?: string) => () => void;
    onRemove: (id: string) => () => void;
    isOpen: Set<string>;
    open: (id:string) => () => void;
    close: (id:string) => () => void;
    goToArc: (id:string) => () => void;
    setParent: (parentId: string | null) => void;
}

export declare interface IArcManagerProps {
    arcs: IComicArc[];
    arc: IComicArc | null;
    isLoading: boolean;
    isOpen: Set<string>;
    open: (id:string) => () => void;
    close: (id:string) => () => void;
    create: (parentId?: string) => () => void;
    remove: (id: string) => () => void;
    goToArc: (id:string) => () => void;
    refresh: () => void;
}

// What gets passed into the component from the parent as attributes
export declare interface IArcManagerInputProps {
    arcId?: string;
}

export type ArcManagerProps = IArcManagerInputProps & IArcManagerProps;