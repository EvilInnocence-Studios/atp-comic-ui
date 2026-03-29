import { ILayoutComponent } from "@theming/lib/layout/componentRegistry";
import { IArcContextProps } from "../ArcView.helpers";

export declare interface IArcParentLinksProps {
    parents: IComicArc[];
}

// What gets passed into the component from the parent as attributes
export declare interface IArcParentLinksInputProps {
    className?: string;
    css?: string;
    classes?: any;
    slots?: Index<ILayoutComponent[]>;
    __layoutId?: string;
    url?: string;
    show?: "all" | "root" | "parent";
    full?: boolean;
}

export type ArcParentLinksProps = IArcParentLinksInputProps & IArcContextProps & IArcParentLinksProps;
