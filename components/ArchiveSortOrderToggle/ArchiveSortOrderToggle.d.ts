import { IComicUserPreferences } from "@comic/lib/useUserPreferences";

export declare interface IArchiveSortOrderToggleProps {

}

// What gets passed into the component from the parent as attributes
export declare interface IArchiveSortOrderToggleInputProps {
    classes?: any;
}

export type ArchiveSortOrderToggleProps = IArchiveSortOrderToggleInputProps & IArchiveSortOrderToggleProps & IComicUserPreferences;