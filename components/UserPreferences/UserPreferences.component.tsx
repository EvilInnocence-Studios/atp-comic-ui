import { overridable } from "@core/lib/overridable";
import { ArchiveSortOrderToggle } from "../ArchiveSortOrderToggle";
import { ArchiveViewModeToggle } from "../ArchiveViewModeToggle";
import {UserPreferencesProps} from "./UserPreferences.d";
import styles from './UserPreferences.module.scss';

export const UserPreferencesComponent = overridable(({}:UserPreferencesProps) =>
    <div className={styles.userPreferences}>
        <h1>Comic User Preferences</h1>
        <hr/>
        <h2>Archive View Mode: <ArchiveViewModeToggle /></h2>
        <h2>Archive Sort Order: <ArchiveSortOrderToggle /></h2>
    </div>
);
