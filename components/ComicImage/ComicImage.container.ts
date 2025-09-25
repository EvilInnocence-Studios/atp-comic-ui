import { createInjector, inject, mergeProps } from "unstateless";
import {ComicImageComponent} from "./ComicImage.component";
import {IComicImageInputProps, ComicImageProps, IComicImageProps} from "./ComicImage.d";

const injectComicImageProps = createInjector(({}:IComicImageInputProps):IComicImageProps => {
    return {};
});

const connect = inject<IComicImageInputProps, ComicImageProps>(mergeProps(
    injectComicImageProps,
));

export const ComicImage = connect(ComicImageComponent);
