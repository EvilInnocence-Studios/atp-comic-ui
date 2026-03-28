import { IComicArc } from "@comic-shared/arc/types";
import { ILayoutComponent } from "@theming/lib/layout/componentRegistry";

export declare interface IArcTypeProps {
    typeName: string;
}

// What gets passed into the component from the parent as attributes
export declare interface IArcTypeInputProps {
    className?: string;
    css?: string;
    classes?: any;
    slots?: Index<ILayoutComponent[]>;
    __layoutId?: string;
    url?: string;
}

export type ArcTypeProps = IArcTypeInputProps & {arc: IComicArc | null} & IArcTypeProps;
