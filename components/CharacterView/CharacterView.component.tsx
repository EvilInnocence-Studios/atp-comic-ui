import { ComicCharacterIdContext } from "@comic/lib/context";
import { overridable } from "@core/lib/overridable";
import { Layout } from "@theming/components/Layout";
import { CharacterViewProps } from "./CharacterView.d";

const Provider = ComicCharacterIdContext.Provider;

export const CharacterViewComponent = overridable(({className, css, id}:CharacterViewProps) => <>
    {css && <style>{css}</style>}
    <div id={`character-${id}`} className={className}>
        <Provider value={id || ""}>
            <Layout element="comicCharacter" />
        </Provider>
    </div>
</>);

