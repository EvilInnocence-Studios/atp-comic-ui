import { injectUserPreferences } from "@comic/lib/useUserPreferences";
import { overridable } from "@core/lib/overridable";
import { createInjector, inject, mergeProps } from "unstateless";
import { ArchiveSortOrderToggleComponent } from "./ArchiveSortOrderToggle.component";
import { ArchiveSortOrderToggleProps, IArchiveSortOrderToggleInputProps, IArchiveSortOrderToggleProps } from "./ArchiveSortOrderToggle.d";

const injectArchiveSortOrderToggleProps = createInjector(({}:IArchiveSortOrderToggleInputProps):IArchiveSortOrderToggleProps => {
    return {};
});

const connect = inject<IArchiveSortOrderToggleInputProps, ArchiveSortOrderToggleProps>(mergeProps(
    injectArchiveSortOrderToggleProps,
    injectUserPreferences,
));

export const ArchiveSortOrderToggle = overridable<IArchiveSortOrderToggleInputProps>(connect(ArchiveSortOrderToggleComponent));
