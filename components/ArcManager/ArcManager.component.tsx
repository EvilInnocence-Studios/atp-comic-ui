import { Button, Card, Col, Row } from "antd";
import {ArcManagerProps, IArcNodeProps} from "./ArcManager.d";
import styles from './ArcManager.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretRight, faPlus, faSitemap, faTrash } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { prop, sort } from "ts-functional";
import { IComicArc } from "@comic-shared/arc/types";
import { ArcEditor } from "../ArcEditor";

const sortArcs = sort.by(prop<IComicArc, "sortOrder">("sortOrder")).asc;

const ArcNode = ({
    arcId, arc, onCreate, onRemove,
    allArcs, level,
    isOpen, open, close,
    goToArc,
}:IArcNodeProps) => {
    return <div className={styles.arcNode}>
        <FontAwesomeIcon
            icon={isOpen.has(arc.id) ? faCaretDown : faCaretRight}
            onClick={isOpen.has(arc.id) ? close(arc.id) : open(arc.id)}
            style={{visibility: allArcs.some(a => a.parentId === arc.id) ? 'visible' : 'hidden'}}
        />&nbsp;
        <div className={styles.actions}>
            <FontAwesomeIcon color="green" icon={faPlus} onClick={onCreate(arc.id)} />
            <FontAwesomeIcon color="red" icon={faTrash} onClick={onRemove(arc.id)} />
        </div>
        <div
            className={clsx([styles.arcName, arcId && arcId === arc.id && styles.selected, arc.enabled && styles.enabled])}
            onClick={goToArc(arc.id)}
        >
            {arc.name}
        </div>
        {isOpen.has(arc.id) && <div className={styles.nodeChildren}>
            {allArcs.filter(child => child.parentId === arc.id).sort(sortArcs).map(child => 
                <ArcNode
                    arcId={arcId}
                    key={child.id}
                    arc={child}
                    allArcs={allArcs}
                    level={level + 1}
                    goToArc={goToArc}
                    onCreate={onCreate}
                    onRemove={onRemove}
                    isOpen={isOpen}
                    open={open}
                    close={close}
                />
            )}
        </div>}
    </div>;
}

export const ArcManagerComponent = ({arcId, arcs, arc, isLoading, create, remove, isOpen, open, close, goToArc, refresh}:ArcManagerProps) =>
    <div className={styles.arcManager}>
        <Row gutter={16}>
            <Col span={6} className={styles.treeCol}>
                <Card
                    size="small"
                    title={<><FontAwesomeIcon icon={faSitemap} /> Arcs</>}
                    loading={isLoading}
                    className={styles.treeCard}
                    extra={<Button size="small" onClick={create()}><FontAwesomeIcon icon={faPlus} /> Add Root Arc</Button>}
                >
                    {arcs.filter(arc => !arc.parentId).sort(sortArcs).map(arc =>
                        <ArcNode
                            arcId={arcId}
                            goToArc={goToArc}
                            key={arc.id}
                            arc={arc}
                            allArcs={arcs}
                            level={0}
                            onCreate={create}
                            onRemove={remove}
                            isOpen={isOpen}
                            open={open}
                            close={close}
                        />
                    )}
                </Card>
            </Col>
            <Col span={18} className={styles.detailCol}>
                {arc && <ArcEditor arc={arc} refresh={refresh}/>}
            </Col>
        </Row>

    </div>;
