import { createInjector, inject, mergeProps } from "unstateless";
import {CharacterPageHeaderComponent} from "./CharacterPageHeader.component";
import {ICharacterPageHeaderInputProps, CharacterPageHeaderProps, ICharacterPageHeaderProps} from "./CharacterPageHeader.d";
import { overridable } from "@core/lib/overridable";

const injectCharacterPageHeaderProps = createInjector(({}:ICharacterPageHeaderInputProps):ICharacterPageHeaderProps => {
    return {};
});

const connect = inject<ICharacterPageHeaderInputProps, CharacterPageHeaderProps>(mergeProps(
    injectCharacterPageHeaderProps,
));

export const CharacterPageHeader = overridable<ICharacterPageHeaderInputProps>(connect(CharacterPageHeaderComponent));
