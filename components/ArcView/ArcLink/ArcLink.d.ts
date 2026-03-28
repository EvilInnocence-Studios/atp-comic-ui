import { IComicArc } from "@comic-shared/arc/types";
import { ILayoutComponent } from "@theming/lib/layout/componentRegistry";

export declare interface IArcLinkProps {

}

// What gets passed into the component from the parent as attributes
export declare interface IArcLinkInputProps {
    className?: string;
    css?: string;
    classes?: any;
    slots?: Index<ILayoutComponent[]>;
    __layoutId?: string;
    url?: string;
}

export type ArcLinkProps = IArcLinkInputProps & {arc: IComicArc | null} & IArcLinkProps;
