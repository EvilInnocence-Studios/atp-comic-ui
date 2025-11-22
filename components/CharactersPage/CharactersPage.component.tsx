import { Spin } from "antd";
import { CharacterGrid } from "../CharacterGrid";
import { CharacterView } from "../CharacterView";
import { CharacterPageHeader } from "./CharacterPageHeader";
import { CharactersPageProps } from "./CharactersPage.d";
import styles from './CharactersPage.module.scss';
import { prop } from "ts-functional";
import { overridable } from "@core/lib/overridable";

export const CharactersPageComponent = overridable(({ characters, isLoading, mode, classes = styles }: CharactersPageProps) =>
    <Spin spinning={isLoading}>
        <div className={classes.characterPage}>
            <CharacterPageHeader />
            <CharacterGrid characters={characters} />

            {mode === "list" && <div className={classes.characterList}>
                {characters.filter(prop("showDetails")).map(char => <CharacterView key={char.id} character={char} />)}
            </div>}
        </div>
    </Spin>
);
