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

const sortArcs = sort.by(prop<IComicArc, "sortOrder">("sortOrder")).asc;

export const ArcNode = overridable(({
    arcId, arc, onCreate, onRemove,
    allArcs, level,
    isOpen, open, close,
    goToArc, classes = styles
}: IArcNodeProps) => {
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
            className={clsx([classes.arcName, arcId && arcId === arc.id && classes.selected, arc.enabled && classes.enabled])}
            onClick={goToArc(arc.id)}
        >
            {arc.name}
        </div>
        {isOpen.has(arc.id) && <div className={classes.nodeChildren}>
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
                    classes={classes}
                />
            )}
        </div>}
    </div>;
});

export const ArcManagerComponent = overridable(({ arcId, arcs, arc, isLoading, create, remove, isOpen, open, close, goToArc, refresh, classes = styles }: ArcManagerProps) =>
    <div className={classes.arcManager}>
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
                            classes={classes}
                        />
                    )}
                </Card>
            </Col>
            <Col span={18} className={classes.detailCol}>
                {arc && <ArcEditor arc={arc} refresh={refresh} allArcs={arcs} />}
            </Col>
        </Row>

    </div>
);
