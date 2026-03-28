import { IComicArc } from "@comic-shared/arc/types";
import { ILayoutComponent } from "@theming/lib/layout/componentRegistry";

export declare interface IArcDateProps {
    
}

// What gets passed into the component from the parent as attributes
export declare interface IArcDateInputProps {
    className?: string;
    css?: string;
    classes?: any;
    slots?: Index<ILayoutComponent[]>;
    __layoutId?: string;
    url?: string;
    format?: string;
}

export type ArcDateProps = IArcDateInputProps & {arc: IComicArc | null} & IArcDateProps;
