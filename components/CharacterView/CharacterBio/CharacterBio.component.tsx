import { overridable } from "@core/lib/overridable";
import Markdown from "react-markdown";
import { CharacterBioProps } from "./CharacterBio.d";

export const CharacterBioComponent = overridable(({className, css, character}:CharacterBioProps) => <>
    {css && <style>{css}</style>}
    <div className={className}>
        <Markdown>{character?.bio}</Markdown>
    </div>
</>);

