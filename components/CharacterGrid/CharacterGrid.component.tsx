import { handle } from "@core/lib/onInputChange";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Modal } from "antd";
import { CharacterImage } from "../CharacterImage";
import { CharacterView } from "../CharacterView";
import { CharacterGridProps } from "./CharacterGrid.d";
import styles from './CharacterGrid.module.scss';
import clsx from "clsx";
import { overridable } from "@core/lib/overridable";

export const CharacterGridComponent = overridable(({ characters, mode, selectedCharacter, setSelectedCharacter, close, next, prev, classes = styles }: CharacterGridProps) => <>
    {mode === "popup" && !!selectedCharacter && <Modal className={classes.characterModal} open={!!selectedCharacter} onCancel={close} footer={null}>
        <CharacterView character={selectedCharacter!} />
        <Button title="Previous Character" onClick={prev} style={{ position: "absolute", top: "256px", left: 0, transform: "translateY(-50%)" }}>
            <FontAwesomeIcon icon={faChevronLeft} />
        </Button>
        <Button title="Next Character" onClick={next} style={{ position: "absolute", top: "256px", right: 0, transform: "translateY(-50%)" }}>
            <FontAwesomeIcon icon={faChevronRight} />
        </Button>
    </Modal>}
    <div className={classes.characterGrid}>
        {characters.map(char => <div className={clsx([classes.characterCard, !char.showDetails && classes.disabled])} key={char.id}>
            <a
                href={mode !== 'popup' ? `#character-${char.id}` : undefined}
                className={classes.anchor}
                onClick={mode === "popup" && char.showDetails ? handle(setSelectedCharacter)(char) : undefined}
            >
                {char.thumbnailId && <CharacterImage characterId={char.id} imageId={char.thumbnailId} />}
                {!char.thumbnailId && <div className={classes.placeholderImage}>No Image</div>}
                <h3>{char.name}</h3>
            </a>
        </div>)}
    </div>
</>
);
