import { overridable } from "@core/lib/overridable";
import { CharacterNameProps } from "./CharacterName.d";

export const CharacterNameComponent = overridable(({ className, css, character }: CharacterNameProps) => <>
    {css && <style>{css}</style>}
    <div className={className}>{character?.name}</div>
</>);

