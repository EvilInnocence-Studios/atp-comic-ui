import { overridable } from "@core/lib/overridable";
import { createInjector, inject, mergeProps } from "unstateless";
import { CharacterViewComponent } from "./CharacterView.component";
import { CharacterViewProps, ICharacterViewInputProps, ICharacterViewProps } from "./CharacterView.d";

const injectCharacterViewProps = createInjector(({}:ICharacterViewInputProps):ICharacterViewProps => {
    return {};
});

const connect = inject<ICharacterViewInputProps, CharacterViewProps>(mergeProps(
    injectCharacterViewProps,
));
export const connectCharacterView = connect;

export const CharacterView = overridable<ICharacterViewInputProps>(connect(CharacterViewComponent));
