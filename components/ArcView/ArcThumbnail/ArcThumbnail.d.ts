import { ILayoutComponent } from "@theming/lib/layout/componentRegistry";
import { IComicArc } from "@comic-shared/arc/types";

export declare interface IArcThumbnailProps {
    arc: IComicArc | null;
}

// What gets passed into the component from the parent as attributes
export declare interface IArcThumbnailInputProps {
    className?: string;
    css?: string;
    classes?: any;
    slots?: Index<ILayoutComponent[]>;
    __layoutId?: string;
    url?: string;
}

export type ArcThumbnailProps = IArcThumbnailInputProps & IArcThumbnailProps;
