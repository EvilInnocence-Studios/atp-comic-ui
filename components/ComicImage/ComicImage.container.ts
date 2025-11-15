import { overridable } from "@core/lib/overridable";
import { createInjector, inject, mergeProps } from "unstateless";
import { ComicImageComponent } from "./ComicImage.component";
import { ComicImageProps, IComicImageInputProps, IComicImageProps } from "./ComicImage.d";

const injectComicImageProps = createInjector(({}:IComicImageInputProps):IComicImageProps => {
    return {};
});

const connect = inject<IComicImageInputProps, ComicImageProps>(mergeProps(
    injectComicImageProps,
));
export const connectComicImage = connect;

export const ComicImage = overridable<IComicImageInputProps>(connect(ComicImageComponent));
