import { injectCharacterContextProps } from "@comic/lib/context";
import { overridable } from "@core/lib/overridable";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import { createInjector, inject, mergeProps } from "unstateless";
import { CharacterNameComponent } from "./CharacterName.component";
import { CharacterNameProps, ICharacterNameInputProps, ICharacterNameProps } from "./CharacterName.d";
import { CharacterNameLayoutEditor } from "./CharacterName.layout";
import { CharacterNamePropEditor } from "./CharacterName.props";
import icon from './icon.svg';

const injectCharacterNameProps = createInjector(({}:ICharacterNameInputProps):ICharacterNameProps => {
    return {};
});

const connect = inject<ICharacterNameInputProps, CharacterNameProps>(mergeProps(
    injectCharacterContextProps,
    injectCharacterNameProps,
));
export const connectCharacterName = connect;

export const CharacterName = withLayoutMetadata(
    overridable<ICharacterNameInputProps>(connect(CharacterNameComponent)),
    {
        name: "CharacterName",
        displayName: "CharacterName",
        category: "Comic",
        subCategory: "Character",
        description: "",
        icon,
        getSlotDisplayName: (slotName, props) => props[slotName] || slotName,
        layoutEditor: CharacterNameLayoutEditor,
        propEditor: CharacterNamePropEditor,
    }
);
