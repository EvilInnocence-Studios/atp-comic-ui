import { ILayoutComponent } from "@theming/lib/layout/componentRegistry";
import { IArcContextProps } from "../ArcView.helpers";

export declare interface IArcPagesProps {
    pages: IComicPage[];
}

// What gets passed into the component from the parent as attributes
export declare interface IArcPagesInputProps {
    className?: string;
    css?: string;
    classes?: any;
    slots?: Index<ILayoutComponent[]>;
    __layoutId?: string;
    url?: string;
}

export type ArcPagesProps = IArcPagesInputProps & IArcContextProps & IArcPagesProps;
