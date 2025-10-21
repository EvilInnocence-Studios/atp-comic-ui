import { createInjector, inject, mergeProps } from "unstateless";
import {CharacterViewComponent} from "./CharacterView.component";
import {ICharacterViewInputProps, CharacterViewProps, ICharacterViewProps} from "./CharacterView.d";

const injectCharacterViewProps = createInjector(({}:ICharacterViewInputProps):ICharacterViewProps => {
    return {};
});

const connect = inject<ICharacterViewInputProps, CharacterViewProps>(mergeProps(
    injectCharacterViewProps,
));

export const CharacterView = connect(CharacterViewComponent);
