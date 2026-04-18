import { IComicArc } from "@comic-shared/arc/types";
import { services } from "@core/lib/api";
import { overridable } from "@core/lib/overridable";
import { useLoaderAsync } from "@core/lib/useLoader";
import { useUpdater } from "@core/lib/useUpdater";
import { createInjector, inject, mergeProps } from "unstateless";
import { ArcEditorComponent } from "./ArcEditor.component";
import { ArcEditorProps, IArcEditorInputProps, IArcEditorProps } from "./ArcEditor.d";

const injectArcEditorProps = createInjector(({arc, refresh}:IArcEditorInputProps):IArcEditorProps => {
    const updater = useUpdater<IComicArc>(
        "arc",
        arc.id,
        arc,
        services().arc.get,
        services().arc.update,
        "manual",
        () => refresh,
    );
    const loader = useLoaderAsync();

    const uploadThumbnail = (file:File) => {
        loader(() => services().arc.thumbnail.upload(updater.history.entity.id, file)
            .then(updater.refresh)
        );
    };

    const removeThumbnail = () => {
        loader(() => services().arc.thumbnail.remove(updater.history.entity.id)
            .then(updater.refresh)
        );
    };

    const uploadBanner = (file:File) => {
        loader(() => services().arc.banner.upload(updater.history.entity.id, file)
            .then(updater.refresh)
        );
    };

    const removeBanner = () => {
        loader(() => services().arc.banner.remove(updater.history.entity.id)
            .then(updater.refresh)
        );
    };

    return {
        ...updater,
        uploadThumbnail, removeThumbnail,
        uploadBanner, removeBanner,
        isLoading: updater.isLoading || loader.isLoading,
    };
});

const connect = inject<IArcEditorInputProps, ArcEditorProps>(mergeProps(
    injectArcEditorProps,
));
export const connectArcEditor = connect;

export const ArcEditor = overridable<IArcEditorInputProps>(connect(ArcEditorComponent));
