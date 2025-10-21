import { createInjector, inject, mergeProps } from "unstateless";
import {CharacterGridComponent} from "./CharacterGrid.component";
import {ICharacterGridInputProps, CharacterGridProps, ICharacterGridProps} from "./CharacterGrid.d";

const injectCharacterGridProps = createInjector(({}:ICharacterGridInputProps):ICharacterGridProps => {
    return {};
});

const connect = inject<ICharacterGridInputProps, CharacterGridProps>(mergeProps(
    injectCharacterGridProps,
));

export const CharacterGrid = connect(CharacterGridComponent);
