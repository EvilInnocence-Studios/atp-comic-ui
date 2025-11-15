import { overridable } from "@core/lib/overridable";
import {ArchivesHeaderProps} from "./ArchivesHeader.d";
import styles from './ArchivesHeader.module.scss';

export const ArchivesHeaderComponent = overridable(({}:ArchivesHeaderProps) =>
    <h1 className={styles.archivesHeader}>Archives</h1>
);
