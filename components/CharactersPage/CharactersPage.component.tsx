import { Spin } from "antd";
import { CharacterGrid } from "../CharacterGrid";
import { CharacterView } from "../CharacterView";
import { CharacterPageHeader } from "./CharacterPageHeader";
import { CharactersPageProps } from "./CharactersPage.d";
import styles from './CharactersPage.module.scss';

export const CharactersPageComponent = ({characters, isLoading, mode}:CharactersPageProps) =>
    <Spin spinning={isLoading}>
        <div className={styles.characterPage}>
            <CharacterPageHeader />
            <CharacterGrid characters={characters} />

            {mode === "list" && <div className={styles.characterList}>
                {characters.map(char => <CharacterView key={char.id} character={char} />)}
            </div>}
        </div>
    </Spin>;
