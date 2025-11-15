import { createInjector, inject, mergeProps } from "unstateless";
import {CharacterAttributesComponent} from "./CharacterAttributes.component";
import {ICharacterAttributesInputProps, CharacterAttributesProps, ICharacterAttributesProps} from "./CharacterAttributes.d";
import { overridable } from "@core/lib/overridable";
import { useEffect, useState } from "react";
import { ICharacterAttribute } from "@comic-shared/character/types";
import { services } from "@core/lib/api";

const injectCharacterAttributesProps = createInjector(({characterId}:ICharacterAttributesInputProps):ICharacterAttributesProps => {
    const [attributes, setAttributes] = useState<ICharacterAttribute[]>([]);

    useEffect(() => {
        services().character.attribute.search(characterId).then(atts => {
            setAttributes(atts.sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0)));
        });
    }, [characterId]);

    return {attributes};
});

const connect = inject<ICharacterAttributesInputProps, CharacterAttributesProps>(mergeProps(
    injectCharacterAttributesProps,
));

export const CharacterAttributes = overridable<ICharacterAttributesInputProps>(connect(CharacterAttributesComponent));
export const connectCharacterAttributes = connect;