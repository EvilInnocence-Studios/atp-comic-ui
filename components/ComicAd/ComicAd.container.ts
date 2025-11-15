import { overridable } from "@core/lib/overridable";
import { createInjector, inject, mergeProps } from "unstateless";
import { ComicAdComponent } from "./ComicAd.component";
import { ComicAdProps, IComicAdInputProps, IComicAdProps } from "./ComicAd.d";

const injectComicAdProps = createInjector(({}:IComicAdInputProps):IComicAdProps => {
    return {};
});

const connect = inject<IComicAdInputProps, ComicAdProps>(mergeProps(
    injectComicAdProps,
));
export const connectComicAd = connect;

export const ComicAd = overridable<IComicAdInputProps>(connect(ComicAdComponent));
