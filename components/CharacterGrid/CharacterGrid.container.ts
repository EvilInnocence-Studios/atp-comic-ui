import { IComicCharacter } from "@comic-shared/character/types";
import { useSetting } from "@common/lib/setting/services";
import { overridable } from "@core/lib/overridable";
import { useState } from "react";
import { createInjector, inject, mergeProps } from "unstateless";
import { CharacterGridComponent } from "./CharacterGrid.component";
import { CharacterGridProps, ICharacterGridInputProps, ICharacterGridProps } from "./CharacterGrid.d";

const injectCharacterGridProps = createInjector(({characters}:ICharacterGridInputProps):ICharacterGridProps => {
    const [selectedCharacter, setSelectedCharacter] = useState<IComicCharacter | null>(null);
    const mode = useSetting("comic.CharacterPageDisplayMode");

    const close = () => setSelectedCharacter(null);

    const next = () => {
        if (!selectedCharacter) return;
        const currentIndex = characters.findIndex(c => c.id === selectedCharacter.id);
        const nextIndex = (currentIndex + 1) % characters.length;
        setSelectedCharacter(characters[nextIndex]);
    };

    const prev = () => {
        if (!selectedCharacter) return;
        const currentIndex = characters.findIndex(c => c.id === selectedCharacter.id);
        const prevIndex = (currentIndex - 1 + characters.length) % characters.length;
        setSelectedCharacter(characters[prevIndex]);
    };

    return {mode, selectedCharacter, setSelectedCharacter, close, next, prev};
});

const connect = inject<ICharacterGridInputProps, CharacterGridProps>(mergeProps(
    injectCharacterGridProps,
));

export const CharacterGrid = overridable<ICharacterGridInputProps>(connect(CharacterGridComponent));
