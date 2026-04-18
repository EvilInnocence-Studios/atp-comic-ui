import { IComicPage } from "@comic-shared/page/types";
import { DeleteBtn } from "@core/components/DeleteBtn";
import { Uploader } from "@core/components/Uploader";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Col, Row, Space, Typography } from "antd";
import { useNavigate } from "react-router";
import { prop, sort } from "ts-functional";
import { ComicImage } from "../ComicImage";
import { PageManagerProps } from "./PageManager.d";
import styles from './PageManager.module.scss';
import { overridable } from "@core/lib/overridable";
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, rectSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const SortablePageNode = ({ page, arcId, remove, classes }: any) => {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: page.id });
    const navigate = useNavigate();
    
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
        touchAction: 'none',
        zIndex: isDragging ? 1 : 'auto',
        position: isDragging ? 'relative' : 'static',
    } as any;

    return (
        <li ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <Card className={classes.pageEditor} size="small" title={page.name || page.url}>
                <div onClick={() => navigate(`/comic/arc/${arcId}/page/${page.id}`)} style={{ cursor: 'pointer' }}>
                    <ComicImage fileName={page.imageUrl || ""} />
                </div>
                <Row>
                    <Col xs={21}>
                        <div className={classes.date}>
                            <Typography.Text type={page.enabled ? "success" : "danger"}>
                                {page.enabled && page.postDate ? new Date(page.postDate).toDateString() : "Disabled"}
                            </Typography.Text>
                        </div>
                    </Col>
                    <Col xs={3}>
                        <div className={classes.controls} onPointerDown={(e) => e.stopPropagation()}>
                            <DeleteBtn entityType="page" onClick={remove(page.id)} />
                        </div>
                    </Col>
                </Row>
            </Card>
        </li>
    );
};

export const PageManagerComponent = overridable(({
    arcId, pages, isLoading, remove, removeAll, upload, onUploadSuccess, enableAll, disableAll, onDragEnd, classes = styles,
}: PageManagerProps) => {
    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 5,
            },
        })
    );

    const sortedPages = pages.sort(sort.by(prop<IComicPage, "sortOrder">("sortOrder")).asc);

    return <div className={classes.pageManager}>
        <Card
            size="small"
            title={<>
                Pages
                <DeleteBtn
                    entityType="pages"
                    message={"Are you sure you want to delete all pages?"}
                    onClick={removeAll}
                />
            </>}
            extra={<Space.Compact>
                <Button
                    size="small"
                    onClick={enableAll}
                    type="primary"
                    disabled={isLoading}
                >Enable All</Button>
                <Button
                    size="small"
                    onClick={disableAll}
                    type="primary"
                    disabled={isLoading}
                >Disable All</Button>
            </Space.Compact>}
        >
            {isLoading && pages.length === 0 && <div>Loading...</div>}
            {!isLoading && pages.length === 0 && <div className={classes.noPages}>
                <FontAwesomeIcon icon={faInfoCircle} /> No pages yet. Use the uploader below to add pages.
            </div>}
            {pages.length > 0 &&
                <div style={{ opacity: isLoading ? 0.6 : 1, pointerEvents: isLoading ? 'none' : 'auto', transition: 'opacity 0.2s' }}>
                    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
                        <SortableContext items={sortedPages.map(p => p.id)} strategy={rectSortingStrategy}>
                            <ul className={classes.pageList}>
                                {sortedPages.map(page => <SortablePageNode key={page.id} page={page} arcId={arcId} remove={remove} classes={classes} />)}
                            </ul>
                        </SortableContext>
                    </DndContext>
                </div>
            }
            <Uploader upload={upload} onUploadSuccess={onUploadSuccess} />
        </Card>
    </div>
});
