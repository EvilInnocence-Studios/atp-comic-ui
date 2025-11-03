import { overridable } from "@core/lib/overridable";
import { createInjector, inject, mergeProps } from "unstateless";
import { CharacterGridComponent } from "./CharacterGrid.component";
import { CharacterGridProps, ICharacterGridInputProps, ICharacterGridProps } from "./CharacterGrid.d";

const injectCharacterGridProps = createInjector(({}:ICharacterGridInputProps):ICharacterGridProps => {
    return {};
});

const connect = inject<ICharacterGridInputProps, CharacterGridProps>(mergeProps(
    injectCharacterGridProps,
));

export const CharacterGrid = overridable<ICharacterGridInputProps>(connect(CharacterGridComponent));
