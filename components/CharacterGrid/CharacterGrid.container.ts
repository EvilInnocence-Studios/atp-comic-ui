import { createInjector, inject, mergeProps } from "unstateless";
import {CharacterGridComponent} from "./CharacterGrid.component";
import {ICharacterGridInputProps, CharacterGridProps, ICharacterGridProps} from "./CharacterGrid.d";
import { overridable } from "@core/lib/overridable";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import icon from './icon.svg';
import { CharacterGridLayoutEditor } from "./CharacterGrid.layout";
import { CharacterGridPropEditor } from "./CharacterGrid.props";
import { useStory } from "@comic/lib/useStory";
import { useState } from "react";
import { IComicCharacter } from "@comic-shared/character/types";
import { prop } from "ts-functional";
import { useSetting } from "@common/lib/setting/services";

const injectCharacterGridProps = createInjector(({characterIds}:ICharacterGridInputProps):ICharacterGridProps => {
    const story = useStory();
    const [selectedCharacter, setSelectedCharacter] = useState<IComicCharacter | null>(null);
    const mode = useSetting("comic.CharacterPageDisplayMode");

    const characters = story.character.list().filter(c => characterIds?.includes(c.id));

    const close = () => setSelectedCharacter(null);

    const next = () => {
        if (!selectedCharacter) return;
        const visibleChars = characters.filter(prop("showDetails"));
        const currentIndex = visibleChars.findIndex(c => c.id === selectedCharacter.id);
        const nextIndex = (currentIndex + 1) % visibleChars.length;
        setSelectedCharacter(visibleChars[nextIndex]);
    };

    const prev = () => {
        if (!selectedCharacter) return;
        const visibleChars = characters.filter(prop("showDetails"));
        const currentIndex = visibleChars.findIndex(c => c.id === selectedCharacter.id);
        const prevIndex = (currentIndex - 1 + visibleChars.length) % visibleChars.length;
        setSelectedCharacter(visibleChars[prevIndex]);
    };

    return {mode, characters, selectedCharacter, setSelectedCharacter, close, next, prev};
});

const connect = inject<ICharacterGridInputProps, CharacterGridProps>(mergeProps(
    injectCharacterGridProps,
));
export const connectCharacterGrid = connect;

export const CharacterGrid = withLayoutMetadata(
    overridable<ICharacterGridInputProps>(connect(CharacterGridComponent)),
    {
        name: "CharacterGrid",
        displayName: "CharacterGrid",
        category: "Comic",
        subCategory: "Character",
        description: "",
        icon,
        getSlotDisplayName: (slotName, props) => props[slotName] || slotName,
        layoutEditor: CharacterGridLayoutEditor,
        propEditor: CharacterGridPropEditor,
    }
);
