import { IComicArc } from "@comic-shared/arc/types";
import { ILayoutComponent } from "@theming/lib/layout/componentRegistry";

export declare interface IArcNumberProps {
    arcNumber: number | null;
}

// What gets passed into the component from the parent as attributes
export declare interface IArcNumberInputProps {
    className?: string;
    css?: string;
    classes?: any;
    slots?: Index<ILayoutComponent[]>;
    __layoutId?: string;
    url?: string;
}

export type ArcNumberProps = IArcNumberInputProps & {arc: IComicArc | null} & IArcNumberProps;
