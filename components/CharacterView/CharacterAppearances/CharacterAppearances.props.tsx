import { CharacterSelect } from "@comic/components/CharacterSelect";
import { ICharacterAppearancesInputProps } from "./CharacterAppearances.d";
import { useStory } from "@comic/lib/useStory";
import { Select } from "antd";

export const CharacterAppearancesPropEditor = (
    { id, rootArc }: ICharacterAppearancesInputProps,
    _updateProps: (props: any) => void,
    updateProp: (prop: string) => (value: any) => void
) => {
    const story = useStory();
    const rootArcs = story.arc.rootArcs();

    return <>
        <CharacterSelect
            characterId={id || ""}  
            onChange={(characterId) => updateProp("id")(characterId)}
        />
        <Select
            style={{ width: '100%' }}
            placeholder="Root arc"
            value={rootArc}
            onChange={updateProp("rootArc")}
            options={rootArcs.sort((a, b) => a.name.localeCompare(b.name)).map(a => ({
                value: a.id,
                label: `${a.name || 'Untitled'}`,
            }))}
        />
    </>;
}
