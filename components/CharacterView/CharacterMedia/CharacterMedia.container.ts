import { ICharacterContextProps, injectCharacterContextProps } from "@comic/lib/context";
import { useStory } from "@comic/lib/useStory";
import { overridable } from "@core/lib/overridable";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import { createInjector, inject, mergeProps } from "unstateless";
import { CharacterMediaComponent } from "./CharacterMedia.component";
import { CharacterMediaProps, ICharacterMediaInputProps, ICharacterMediaProps } from "./CharacterMedia.d";
import { CharacterMediaLayoutEditor } from "./CharacterMedia.layout";
import { CharacterMediaPropEditor } from "./CharacterMedia.props";
import icon from './icon.svg';

const injectCharacterMediaProps = createInjector(({character}:ICharacterMediaInputProps & ICharacterContextProps):ICharacterMediaProps => {
    const story = useStory();    
    const media = story.character.media(character?.id || "");

    return {media};
});

const connect = inject<ICharacterMediaInputProps, CharacterMediaProps>(mergeProps(
    injectCharacterContextProps,
    injectCharacterMediaProps,
));
export const connectCharacterMedia = connect;

export const CharacterMedia = withLayoutMetadata(
    overridable<ICharacterMediaInputProps>(connect(CharacterMediaComponent)),
    {
        name: "CharacterMedia",
        displayName: "CharacterMedia",
        category: "Comic",
        subCategory: "Character",
        description: "",
        icon,
        getSlotDisplayName: (slotName, props) => props[slotName] || slotName,
        layoutEditor: CharacterMediaLayoutEditor,
        propEditor: CharacterMediaPropEditor,
    }
);
