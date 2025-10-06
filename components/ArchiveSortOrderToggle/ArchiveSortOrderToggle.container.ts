import { createInjector, inject, mergeProps } from "unstateless";
import {ArchiveSortOrderToggleComponent} from "./ArchiveSortOrderToggle.component";
import {IArchiveSortOrderToggleInputProps, ArchiveSortOrderToggleProps, IArchiveSortOrderToggleProps} from "./ArchiveSortOrderToggle.d";
import { injectUserPreferences } from "@comic/lib/useUserPreferences";

const injectArchiveSortOrderToggleProps = createInjector(({}:IArchiveSortOrderToggleInputProps):IArchiveSortOrderToggleProps => {
    return {};
});

const connect = inject<IArchiveSortOrderToggleInputProps, ArchiveSortOrderToggleProps>(mergeProps(
    injectArchiveSortOrderToggleProps,
    injectUserPreferences,
));

export const ArchiveSortOrderToggle = connect(ArchiveSortOrderToggleComponent);
