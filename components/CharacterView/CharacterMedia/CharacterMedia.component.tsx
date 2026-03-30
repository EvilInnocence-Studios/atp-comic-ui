import { ICharacterMedia } from "@comic-shared/character/types";
import { CharacterImage } from "@comic/components/CharacterImage";
import { MediaPopup } from "@core/components/MediaPopup";
import { overridable } from "@core/lib/overridable";
import { prop } from "ts-functional";
import { CharacterMediaProps } from "./CharacterMedia.d";

export const CharacterMediaComponent = overridable(({className, css, media, character}:CharacterMediaProps) => <>
    {css && <style>{css}</style>}
    <div className={className}>
        <MediaPopup
            vertical
            media={media}
            getId={prop<any, any>('id')}
            render={(item: ICharacterMedia) => <CharacterImage characterId={character?.id || ""} imageId={item.id} />}
        />
    </div>
</>);

