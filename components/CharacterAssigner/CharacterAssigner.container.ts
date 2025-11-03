import { IComicCharacter } from "@comic-shared/character/types";
import { services } from "@core/lib/api";
import { overridable } from "@core/lib/overridable";
import { useLoaderAsync } from "@core/lib/useLoader";
import { Key, useEffect, useState } from "react";
import { createInjector, inject, mergeProps } from "unstateless";
import { CharacterAssignerComponent } from "./CharacterAssigner.component";
import { CharacterAssignerProps, ICharacterAssignerInputProps, ICharacterAssignerProps } from "./CharacterAssigner.d";

const injectCharacterAssignerProps = createInjector(({pageId}:ICharacterAssignerInputProps):ICharacterAssignerProps => {
    // key, title
    const [allCharacters, setAllCharacters] = useState<IComicCharacter[]>([]);
    const [assigned, setAssigned] = useState<IComicCharacter[]>([]);
    const loader = useLoaderAsync();

    useEffect(() => {
        loader(() => services().character.search().then(setAllCharacters));
    }, []);

    const refresh = () => {
        if(pageId) {
            loader(() => services().page.character.search(pageId).then(setAssigned));
        }
    }

    useEffect(refresh, [pageId]);

    const onChange = (_nextTargetKeys:Key[], direction:string, moveKeys:Key[]) => {
        if (direction === "right") {
            // Assign
            Promise.all(moveKeys.map((characterId) =>
                services().page.character.add(pageId, characterId)
            )).then(refresh);
        } else if (direction === "left") {
            // Unassign
            Promise.all(moveKeys.map((characterId) =>
                services().page.character.remove(pageId, characterId)
            )).then(refresh);
        }
    }
    
    return {allCharacters, assigned, onChange, isLoading: loader.isLoading};
});

const connect = inject<ICharacterAssignerInputProps, CharacterAssignerProps>(mergeProps(
    injectCharacterAssignerProps,
));

export const CharacterAssigner = overridable<ICharacterAssignerInputProps>(connect(CharacterAssignerComponent));
