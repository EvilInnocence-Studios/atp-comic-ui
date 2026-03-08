import { overridable } from "@core/lib/overridable";
import { createInjector, inject, mergeProps } from "unstateless";
import { ComicAdComponent } from "./ComicAd.component";
import { ComicAdProps, IComicAdInputProps, IComicAdProps, ISizedComicAdInputProps, SizedComicAdProps } from "./ComicAd.d";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import icon from './icon.svg';
import { ComicAdPropEditor } from "./ComicAd.props";

const injectComicAdProps = createInjector(({ }: IComicAdInputProps): IComicAdProps => {
    return {};
});

const connect = inject<IComicAdInputProps, ComicAdProps>(mergeProps(
    injectComicAdProps,
));
export const connectComicAd = connect;

export const connectSizedComicAd = inject<ISizedComicAdInputProps, SizedComicAdProps>(mergeProps(
    injectComicAdProps as any,
));

export const ComicAd = withLayoutMetadata(
    overridable<IComicAdInputProps>(connect(ComicAdComponent)),
    {
        name: "Custom Size",
        category: "ComicAd",
        icon,
        displayName: "Comic Ad",
        description: "The comic ad",
        propEditor: ComicAdPropEditor,
    }
);
