import { createInjector, inject, mergeProps } from "unstateless";
import {ArcEditorComponent} from "./ArcEditor.component";
import {IArcEditorInputProps, ArcEditorProps, IArcEditorProps} from "./ArcEditor.d";
import { useUpdater } from "@core/lib/useUpdater";
import { IComicArc } from "@comic-shared/arc/types";
import { services } from "@core/lib/api";
import { useLoaderAsync } from "@core/lib/useLoader";

const injectArcEditorProps = createInjector(({arc, refresh}:IArcEditorInputProps):IArcEditorProps => {
    const updater = useUpdater<IComicArc>(
        "arc",
        arc.id,
        arc,
        services().arc.get,
        services().arc.update,
        "automatic",
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

    const setParent = (parentId: string | null) => {
        if(arc) {
            loader(() => services().arc.update(arc.id, {...arc, parentId}).then(refresh));
        }
    }    

    const moveUp = () => {
        if (arc && arc.parentId) {
            loader(() => services().arc.sort(arc.parentId as string, arc.id, arc.sortOrder - 1).then(refresh));
        }
    }

    const moveDown = () => {
        if (arc && arc.parentId) {
            loader(() => services().arc.sort(arc.parentId as string, arc.id, arc.sortOrder + 1).then(refresh));
        }
    }
    
    return {
        ...updater,
        uploadThumbnail, removeThumbnail,
        uploadBanner, removeBanner,
        isLoading: updater.isLoading || loader.isLoading,
        setParent, moveUp, moveDown,
    };
});

const connect = inject<IArcEditorInputProps, ArcEditorProps>(mergeProps(
    injectArcEditorProps,
));

export const ArcEditor = connect(ArcEditorComponent);
