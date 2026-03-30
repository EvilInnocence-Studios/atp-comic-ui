import { injectCharacterContextProps } from "@comic/lib/context";
import { overridable } from "@core/lib/overridable";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import { createInjector, inject, mergeProps } from "unstateless";
import { CharacterThumbnailComponent } from "./CharacterThumbnail.component";
import { CharacterThumbnailProps, ICharacterThumbnailInputProps, ICharacterThumbnailProps } from "./CharacterThumbnail.d";
import { CharacterThumbnailLayoutEditor } from "./CharacterThumbnail.layout";
import { CharacterThumbnailPropEditor } from "./CharacterThumbnail.props";
import icon from './icon.svg';

const injectCharacterThumbnailProps = createInjector(({}:ICharacterThumbnailInputProps):ICharacterThumbnailProps => {
    return {};
});

const connect = inject<ICharacterThumbnailInputProps, CharacterThumbnailProps>(mergeProps(
    injectCharacterContextProps,
    injectCharacterThumbnailProps,
));
export const connectCharacterThumbnail = connect;

export const CharacterThumbnail = withLayoutMetadata(
    overridable<ICharacterThumbnailInputProps>(connect(CharacterThumbnailComponent)),
    {
        name: "CharacterThumbnail",
        displayName: "CharacterThumbnail",
        category: "Comic",
        subCategory: "Character",
        description: "",
        icon,
        getSlotDisplayName: (slotName, props) => props[slotName] || slotName,
        layoutEditor: CharacterThumbnailLayoutEditor,
        propEditor: CharacterThumbnailPropEditor,
    }
);
