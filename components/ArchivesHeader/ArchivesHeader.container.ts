import { createInjector, inject, mergeProps } from "unstateless";
import {ArchivesHeaderComponent} from "./ArchivesHeader.component";
import {IArchivesHeaderInputProps, ArchivesHeaderProps, IArchivesHeaderProps} from "./ArchivesHeader.d";
import { overridable } from "@core/lib/overridable";

const injectArchivesHeaderProps = createInjector(({}:IArchivesHeaderInputProps):IArchivesHeaderProps => {
    return {};
});

const connect = inject<IArchivesHeaderInputProps, ArchivesHeaderProps>(mergeProps(
    injectArchivesHeaderProps,
));

export const ArchivesHeader = overridable<IArchivesHeaderInputProps>(connect(ArchivesHeaderComponent));
