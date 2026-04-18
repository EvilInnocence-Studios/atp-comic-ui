import { IComicArc } from "@comic-shared/arc/types";
import { DeleteBtn } from "@core/components/DeleteBtn";
import { noProp } from "@core/lib/util";
import { faCaretDown, faCaretRight, faPlus, faSitemap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Col, Row } from "antd";
import clsx from "clsx";
import { prop, sort } from "ts-functional";
import { ArcEditor } from "../ArcEditor";
import { ArcManagerProps, IArcNodeProps } from "./ArcManager.d";
import styles from './ArcManager.module.scss';
import { ClearCacheButton } from "@common/components/ClearCacheButton";
import { overridable } from "@core/lib/overridable";
import React from "react";
import { DndContext, useDraggable, useDroppable, pointerWithin, useSensor, useSensors, PointerSensor } from "@dnd-kit/core";

const DropTargetIndicator = ({ parentId, index }: { parentId: string | null, index: number }) => {
    const { setNodeRef, isOver } = useDroppable({
        id: `arc-drop:${parentId || 'root'}:${index}`,
        data: { parentId, index }
    });

    return (
        <div 
            ref={setNodeRef}
            style={{
                height: '16px',
                width: `calc(100% - 20px)`,
                marginLeft: `20px`,
                position: 'relative',
                zIndex: isOver ? 10 : 2,
                marginTop: '-8px',
                marginBottom: '-8px',
                pointerEvents: 'none'
            }}
        >
            <div style={{
                position: 'absolute',
                left: 0,
                right: 0,
                height: '4px',
                backgroundColor: isOver ? '#1890ff' : 'transparent',
                transition: 'background-color 0.2s',
                borderRadius: '2px',
                top: '50%',
                marginTop: '-2px'
            }} />
        </div>
    );
};

const sortArcs = sort.by(prop<IComicArc, "sortOrder">("sortOrder")).asc;

export const ArcNode = overridable(({
    arcId, arc, onCreate, onRemove,
    allArcs, level,
    isOpen, open, close,
    goToArc, classes = styles,
    isDraggingAncestor = false
}: IArcNodeProps) => {
    const { setNodeRef, attributes, listeners, isDragging } = useDraggable({
        id: `arc-drag:${arc.id}`,
        data: { arc }
    });

    const isLocalDragging = isDragging || isDraggingAncestor;

    return <div className={classes.arcNode}>
        <FontAwesomeIcon
            icon={isOpen.has(arc.id) ? faCaretDown : faCaretRight}
            onClick={isOpen.has(arc.id) ? close(arc.id) : open(arc.id)}
            style={{ visibility: allArcs.some(a => a.parentId === arc.id) ? 'visible' : 'hidden' }}
        />&nbsp;
        <div className={classes.actions}>
            <FontAwesomeIcon color="green" icon={faPlus} onClick={noProp(onCreate(arc.id))} />
            <DeleteBtn entityType="arc" onClick={onRemove(arc.id)} />
        </div>
        <div
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            className={clsx([classes.arcName, arcId && arcId === arc.id && classes.selected, arc.enabled && classes.enabled])}
            onClick={goToArc(arc.id)}
            style={{ opacity: isDragging ? 0.3 : 1, cursor: 'grab' }}
        >
            {arc.name}
        </div>
        <div className={classes.nodeChildren}>
            {!isLocalDragging && <DropTargetIndicator parentId={arc.id} index={0} />}
            {isOpen.has(arc.id) && allArcs.filter(child => child.parentId === arc.id).sort(sortArcs).map((child, index) =>
                <React.Fragment key={child.id}>
                    <ArcNode
                        arcId={arcId}
                        arc={child}
                        allArcs={allArcs}
                        level={level + 1}
                        goToArc={goToArc}
                        onCreate={onCreate}
                        onRemove={onRemove}
                        isOpen={isOpen}
                        open={open}
                        close={close}
                        classes={classes}
                        isDraggingAncestor={isLocalDragging}
                    />
                    {!isLocalDragging && <DropTargetIndicator parentId={arc.id} index={index + 1} />}
                </React.Fragment>
            )}
        </div>
    </div>;
});

export const ArcManagerComponent = overridable(({ arcId, arcs, arc, isLoading, create, remove, isOpen, open, close, goToArc, refresh, onDragEnd, classes = styles }: ArcManagerProps) => {
    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 5,
            },
        })
    );

    return <div className={classes.arcManager}>
        <DndContext onDragEnd={onDragEnd} collisionDetection={pointerWithin} sensors={sensors}>
            <Row gutter={16}>
                <Col span={6} className={classes.treeCol}>
                    <ClearCacheButton entity="story" cacheType="arc,page" />
                    <br /><br />
                    <Card
                        size="small"
                        title={<><FontAwesomeIcon icon={faSitemap} /> Arcs</>}
                        loading={isLoading}
                        className={classes.treeCard}
                        extra={<Button size="small" onClick={create()}><FontAwesomeIcon icon={faPlus} /> Add Root Arc</Button>}
                    >
                        <DropTargetIndicator parentId={null} index={0} />
                        {arcs.filter(arc => !arc.parentId).sort(sortArcs).map((arc, index) =>
                            <React.Fragment key={arc.id}>
                                <ArcNode
                                    arcId={arcId}
                                    goToArc={goToArc}
                                    arc={arc}
                                    allArcs={arcs}
                                    level={0}
                                    onCreate={create}
                                    onRemove={remove}
                                    isOpen={isOpen}
                                    open={open}
                                    close={close}
                                    classes={classes}
                                />
                                <DropTargetIndicator parentId={null} index={index + 1} />
                            </React.Fragment>
                        )}
                    </Card>
                </Col>
                <Col span={18} className={classes.detailCol}>
                    {arc && <ArcEditor arc={arc} refresh={refresh} allArcs={arcs} />}
                </Col>
            </Row>
        </DndContext>
    </div>
});
