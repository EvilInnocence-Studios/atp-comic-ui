import { Spin } from "antd";
import {CharactersPageProps} from "./CharactersPage.d";
import styles from './CharactersPage.module.scss';
import { CharacterGrid } from "../CharacterGrid";
import { CharacterView } from "../CharacterView";

export const CharactersPageComponent = ({characters, isLoading, mode}:CharactersPageProps) =>
    <Spin spinning={isLoading}>
        <div className={styles.characterPage}>
            <h1>Characters</h1>
            <CharacterGrid characters={characters} />

            {mode === "list" && characters.map(char => <CharacterView key={char.id} character={char} />)}
        </div>
    </Spin>;
