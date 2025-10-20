import { createInjector, inject, mergeProps } from "unstateless";
import {CharacterEditorComponent} from "./CharacterEditor.component";
import {ICharacterEditorInputProps, CharacterEditorProps, ICharacterEditorProps} from "./CharacterEditor.d";

const injectCharacterEditorProps = createInjector(({}:ICharacterEditorInputProps):ICharacterEditorProps => {
    return {};
});

const connect = inject<ICharacterEditorInputProps, CharacterEditorProps>(mergeProps(
    injectCharacterEditorProps,
));

export const CharacterEditor = connect(CharacterEditorComponent);
