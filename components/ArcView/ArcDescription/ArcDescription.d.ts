import { IComicArc } from "@comic-shared/arc/types";
import { ILayoutComponent } from "@theming/lib/layout/componentRegistry";

export declare interface IArcDescriptionProps {
    arc: IComicArc | null;
}

// What gets passed into the component from the parent as attributes
export declare interface IArcDescriptionInputProps {
    className?: string;
    css?: string;
    classes?: any;
    slots?: Index<ILayoutComponent[]>;
    __layoutId?: string;
    url?: string;
}

export type ArcDescriptionProps = IArcDescriptionInputProps & IArcDescriptionProps;
