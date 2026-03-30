import { CharacterImage } from "@comic/components/CharacterImage";
import { overridable } from "@core/lib/overridable";
import { CharacterThumbnailProps } from "./CharacterThumbnail.d";

export const CharacterThumbnailComponent = overridable(({className, css, character}:CharacterThumbnailProps) => <>
    {css && <style>{css}</style>}
    {character && <CharacterImage className={className} characterId={character.id} imageId={character.mainImageId} />}
</>);

