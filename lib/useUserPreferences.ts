import { useSetting } from "@common/lib/setting/services";
import { useEffect } from "react";
import { createInjector, Setter, useLocalStorage } from "unstateless";

export declare type SortOrder = "asc" | "desc";
export declare type ArchiveViewMode = "grid" | "list";
export declare interface IComicUserPreferences {
    archive: {
        mode: ArchiveViewMode;
        setMode: Setter<ArchiveViewMode>;
        sortOrder: SortOrder;
        setSortOrder: (order: SortOrder) => void;
    }
}

export const useArchiveViewMode = useLocalStorage.string<ArchiveViewMode>("comic.archiveViewMode", "list");
export const useArchiveSortOrder = useLocalStorage.string<SortOrder>("comic.archiveSortOrder", "asc");

export const useUserPreferences = ():IComicUserPreferences => {
    const defaultMode = useSetting("comic.defaultArchiveView") as ArchiveViewMode;
    const [mode, setMode] = useArchiveViewMode();
    useEffect(() => {setMode(defaultMode);}, [defaultMode]);

    const defaultSortOrder = useSetting("comic.defaultArchivesSortOrder");
    const [sortOrder, setSortOrder] = useArchiveSortOrder();
    useEffect(() => {setSortOrder(defaultSortOrder as SortOrder);}, [defaultSortOrder]);
    
    return {
        archive: {
            mode, setMode,
            sortOrder, setSortOrder,
        }
    }
}

export const injectUserPreferences = createInjector(useUserPreferences);