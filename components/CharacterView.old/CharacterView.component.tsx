import { ComicCharacterIdContext } from "@comic/lib/context";
import { overridable } from "@core/lib/overridable";
import { Layout } from "@theming/components/Layout";
import { CharacterViewProps } from "./CharacterView.d";

const Provider = ComicCharacterIdContext.Provider;

export const CharacterViewComponent = overridable(({ id }: CharacterViewProps) => <>
    <Provider value={id}>
        <Layout element="comicCharacter" />
    </Provider>
</>);
