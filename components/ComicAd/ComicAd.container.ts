import { createInjector, inject, mergeProps } from "unstateless";
import { ComicAdComponent } from "./ComicAd.component";
import { ComicAdProps, IComicAdInputProps, IComicAdProps } from "./ComicAd.d";

const injectComicAdProps = createInjector(({}:IComicAdInputProps):IComicAdProps => {
    return {};
});

const connect = inject<IComicAdInputProps, ComicAdProps>(mergeProps(
    injectComicAdProps,
));

export const ComicAd = connect(ComicAdComponent);
