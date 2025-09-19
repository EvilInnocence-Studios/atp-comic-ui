import { createInjector, inject, mergeProps } from "unstateless";
import {CharacterManagerComponent} from "./CharacterManager.component";
import {ICharacterManagerInputProps, CharacterManagerProps, ICharacterManagerProps} from "./CharacterManager.d";

const injectCharacterManagerProps = createInjector(({}:ICharacterManagerInputProps):ICharacterManagerProps => {
    return {};
});

const connect = inject<ICharacterManagerInputProps, CharacterManagerProps>(mergeProps(
    injectCharacterManagerProps,
));

export const CharacterManager = connect(CharacterManagerComponent);
