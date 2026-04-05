import { createInjector, inject, mergeProps } from "unstateless";
import {CharacterViewComponent} from "./CharacterView.component";
import {ICharacterViewInputProps, CharacterViewProps, ICharacterViewProps} from "./CharacterView.d";
import { overridable } from "@core/lib/overridable";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import icon from './icon.svg';
// import { CharacterViewLayoutEditor } from "./CharacterView.layout";
import { CharacterViewPropEditor } from "./CharacterView.props";

const injectCharacterViewProps = createInjector(({}:ICharacterViewInputProps):ICharacterViewProps => {
    return {};
});

const connect = inject<ICharacterViewInputProps, CharacterViewProps>(mergeProps(
    injectCharacterViewProps,
));
export const connectCharacterView = connect;

export const CharacterView = withLayoutMetadata(
    overridable<ICharacterViewInputProps>(connect(CharacterViewComponent)),
    {
        name: "CharacterView",
        displayName: "CharacterView",
        category: "Comic",
        subCategory: "Character",
        description: "",
        icon,
        getSlotDisplayName: (slotName, props) => props[slotName] || slotName,
        // layoutEditor: CharacterViewLayoutEditor,
        propEditor: CharacterViewPropEditor,
    }
);
