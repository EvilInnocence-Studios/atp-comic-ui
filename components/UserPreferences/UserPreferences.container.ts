import { injectUserPreferences } from "@comic/lib/useUserPreferences";
import { overridable } from "@core/lib/overridable";
import { createInjector, inject, mergeProps } from "unstateless";
import { UserPreferencesComponent } from "./UserPreferences.component";
import { IUserPreferencesInputProps, IUserPreferencesProps, UserPreferencesProps } from "./UserPreferences.d";

const injectUserPreferencesProps = createInjector(({}:IUserPreferencesInputProps):IUserPreferencesProps => {
    return {};
});

const connect = inject<IUserPreferencesInputProps, UserPreferencesProps>(mergeProps(
    injectUserPreferencesProps,
    injectUserPreferences,
));

export const UserPreferences = overridable<IUserPreferencesInputProps>(connect(UserPreferencesComponent));
