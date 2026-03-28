import { createInjector, inject, mergeProps } from "unstateless";
import {EpisodeImagesComponent} from "./EpisodeImages.component";
import {IEpisodeImagesInputProps, EpisodeImagesProps, IEpisodeImagesProps} from "./EpisodeImages.d";
import { overridable } from "@core/lib/overridable";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import icon from './icon.svg';
import { EpisodeImagesLayoutEditor } from "./EpisodeImages.layout";
import { EpisodeImagesPropEditor } from "./EpisodeImages.props";
import { injectArcContextProps } from "../ArcView.helpers";
import { useStory } from "@comic/lib/useStory";
import { IComicArc } from "@comic-shared/arc/types";

const injectEpisodeImagesProps = createInjector(({arc}:IEpisodeImagesInputProps & {arc: IComicArc | null}):IEpisodeImagesProps => {
    const story = useStory();
    const pages = story.arc.pages(arc?.id || "");
    
    return {pages};
});

const connect = inject<IEpisodeImagesInputProps, EpisodeImagesProps>(mergeProps(
    injectArcContextProps,
    injectEpisodeImagesProps,
));
export const connectEpisodeImages = connect;

export const EpisodeImages = withLayoutMetadata(
    overridable<IEpisodeImagesInputProps>(connect(EpisodeImagesComponent)),
    {
        name: "EpisodeImages",
        displayName: "Episode Images",
        category: "Comic",
        description: "",
        icon,
        getSlotDisplayName: (slotName, props) => props[slotName] || slotName,
        layoutEditor: EpisodeImagesLayoutEditor,
        propEditor: EpisodeImagesPropEditor,
    }
);
