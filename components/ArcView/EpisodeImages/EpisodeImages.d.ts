import { IComicArc } from "@comic-shared/arc/types";
import { IComicPage } from "@comic-shared/page/types";
import { ILayoutComponent } from "@theming/lib/layout/componentRegistry";

export declare interface IEpisodeImagesProps {
    pages: IComicPage[];
}

// What gets passed into the component from the parent as attributes
export declare interface IEpisodeImagesInputProps {
    className?: string;
    css?: string;
    classes?: any;
    slots?: Index<ILayoutComponent[]>;
    __layoutId?: string;
    url?: string;
}

export type EpisodeImagesProps = IEpisodeImagesInputProps & {arc: IComicArc | null} & IEpisodeImagesProps;
