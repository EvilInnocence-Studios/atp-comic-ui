import { ILayoutComponent } from "@theming/lib/layout/componentRegistry";
import { IArcContextProps } from "@comic/lib/context";

export declare interface IArcNavProps {
    archiveArc: IComicArc;
    prevArc: IComicArc | null;
    nextArc: IComicArc | null;
    firstArc: IComicArc | null;
    latestArc: IComicArc | null;
}

// What gets passed into the component from the parent as attributes
export declare interface IArcNavInputProps {
    className?: string;
    css?: string;
    classes?: any;
    slots?: Index<ILayoutComponent[]>;
    __layoutId?: string;
    url?: string;
    top?: boolean;
    bottom?: boolean;
}

export type ArcNavProps = IArcNavInputProps & IArcContextProps & IArcNavProps;
