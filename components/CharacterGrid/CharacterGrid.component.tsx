import { overridable } from "@core/lib/overridable";
import {CharacterGridProps} from "./CharacterGrid.d";
import styles from './CharacterGrid.module.scss';
import { CharacterView } from "../CharacterView";
import { Button, Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { CharacterImage } from "../CharacterImage";
import { clsx } from "clsx";
import { handle } from "@core/lib/onInputChange";

export const CharacterGridComponent = overridable(({classes = styles, className, css, mode, selectedCharacter, setSelectedCharacter, close, next, prev, characters}:CharacterGridProps) => <>
    {css && <style>{css}</style>}
    <div className={className}>
        {mode === "popup" && !!selectedCharacter && <Modal className={classes.characterModal} open={!!selectedCharacter} onCancel={close} footer={null}>
            <CharacterView id={selectedCharacter.id} />
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
    </div>
</>);

