import { createInjector, inject, mergeProps } from "unstateless";
import {CharacterAttributesComponent} from "./CharacterAttributes.component";
import {ICharacterAttributesInputProps, CharacterAttributesProps, ICharacterAttributesProps} from "./CharacterAttributes.d";
import { overridable } from "@core/lib/overridable";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import icon from './icon.svg';
import { CharacterAttributesLayoutEditor } from "./CharacterAttributes.layout";
import { CharacterAttributesPropEditor } from "./CharacterAttributes.props";
import { ICharacterContextProps, injectCharacterContextProps } from "@comic/lib/context";
import { useStory } from "@comic/lib/useStory";

const injectCharacterAttributesProps = createInjector(({character}:ICharacterAttributesInputProps & ICharacterContextProps):ICharacterAttributesProps => {
    const story = useStory();

    const attributes = story.character.attributes(character?.id || "");
    
    return {attributes};
});

const connect = inject<ICharacterAttributesInputProps, CharacterAttributesProps>(mergeProps(
    injectCharacterContextProps,
    injectCharacterAttributesProps,
));
export const connectCharacterAttributes = connect;

export const CharacterAttributes = withLayoutMetadata(
    overridable<ICharacterAttributesInputProps>(connect(CharacterAttributesComponent)),
    {
        name: "CharacterAttributes",
        displayName: "CharacterAttributes",
        category: "Comic",
        subCategory: "Character",
        description: "",
        icon,
        getSlotDisplayName: (slotName, props) => props[slotName] || slotName,
        layoutEditor: CharacterAttributesLayoutEditor,
        propEditor: CharacterAttributesPropEditor,
    }
);
