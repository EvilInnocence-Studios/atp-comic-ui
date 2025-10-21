import { ComicImage } from "../ComicImage";
import {CharacterGridProps} from "./CharacterGrid.d";
import styles from './CharacterGrid.module.scss';

export const CharacterGridComponent = ({characters}:CharacterGridProps) =>
    <div className={styles.characterGrid}>
        {characters.map(char => <div className={styles.characterCard} key={char.id}>
            <a href="#character-{char.id}" className={styles.anchor}>
                {char.thumbnailUrl && <ComicImage fileName={char.thumbnailUrl} />}
                {!char.thumbnailUrl && <div className={styles.placeholderImage}>No Image</div>}
                <h3>{char.name}</h3>
            </a>
        </div>)}
    </div>;
