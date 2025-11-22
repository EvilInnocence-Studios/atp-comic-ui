import { overridable } from "@core/lib/overridable";
import { ArchivesHeaderProps } from "./ArchivesHeader.d";
import styles from './ArchivesHeader.module.scss';

export const ArchivesHeaderComponent = overridable(({ classes = styles }: ArchivesHeaderProps) =>
    <h1 className={classes.archivesHeader}>Archives</h1>
);
