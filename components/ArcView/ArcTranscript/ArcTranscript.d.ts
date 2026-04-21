import { ILayoutComponent } from "@theming/lib/layout/componentRegistry";

export declare interface IArcTranscriptProps {
    arc: IComicArc | null;
}

// What gets passed into the component from the parent as attributes
export declare interface IArcTranscriptInputProps {
    className?: string;
    css?: string;
    classes?: any;
    slots?: Index<ILayoutComponent[]>;
    __layoutId?: string;
    url?: string;
}

export type ArcTranscriptProps = IArcTranscriptInputProps & IArcTranscriptProps;
