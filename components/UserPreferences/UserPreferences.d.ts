import { IComicUserPreferences } from "@comic/lib/useUserPreferences";

export declare interface IUserPreferencesProps {

}

// What gets passed into the component from the parent as attributes
export declare interface IUserPreferencesInputProps {

}

export type UserPreferencesProps = IUserPreferencesInputProps & IUserPreferencesProps & IComicUserPreferences;