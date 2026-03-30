import { injectCharacterContextProps } from "@comic/lib/context";
import { overridable } from "@core/lib/overridable";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import { createInjector, inject, mergeProps } from "unstateless";
import { CharacterBioComponent } from "./CharacterBio.component";
import { CharacterBioProps, ICharacterBioInputProps, ICharacterBioProps } from "./CharacterBio.d";
import { CharacterBioLayoutEditor } from "./CharacterBio.layout";
import { CharacterBioPropEditor } from "./CharacterBio.props";
import icon from './icon.svg';

const injectCharacterBioProps = createInjector(({}:ICharacterBioInputProps):ICharacterBioProps => {
    return {};
});

const connect = inject<ICharacterBioInputProps, CharacterBioProps>(mergeProps(
    injectCharacterContextProps,
    injectCharacterBioProps,
));
export const connectCharacterBio = connect;

export const CharacterBio = withLayoutMetadata(
    overridable<ICharacterBioInputProps>(connect(CharacterBioComponent)),
    {
        name: "CharacterBio",
        displayName: "CharacterBio",
        category: "Comic",
        subCategory: "Character",
        description: "",
        icon,
        getSlotDisplayName: (slotName, props) => props[slotName] || slotName,
        layoutEditor: CharacterBioLayoutEditor,
        propEditor: CharacterBioPropEditor,
    }
);
