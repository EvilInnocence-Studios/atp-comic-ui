import { injectUserPreferences } from "@comic/lib/useUserPreferences";
import { createInjector, inject, mergeProps } from "unstateless";
import { ArchiveViewModeToggleComponent } from "./ArchiveViewModeToggle.component";
import { ArchiveViewModeToggleProps, IArchiveViewModeToggleInputProps, IArchiveViewModeToggleProps } from "./ArchiveViewModeToggle.d";

const injectArchiveViewModeToggleProps = createInjector(({}:IArchiveViewModeToggleInputProps):IArchiveViewModeToggleProps => {
    return {};
});

const connect = inject<IArchiveViewModeToggleInputProps, ArchiveViewModeToggleProps>(mergeProps(
    injectArchiveViewModeToggleProps,
    injectUserPreferences,
));

export const ArchiveViewModeToggle = connect(ArchiveViewModeToggleComponent);
