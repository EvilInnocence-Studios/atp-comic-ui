import { IComicPage } from "@comic-shared/page/types";
import { DeleteBtn } from "@core/components/DeleteBtn";
import { Uploader } from "@core/components/Uploader";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Col, Row, Space, Typography } from "antd";
import { Link } from "react-router";
import { prop, sort } from "ts-functional";
import { ComicImage } from "../ComicImage";
import { PageManagerProps } from "./PageManager.d";
import styles from './PageManager.module.scss';
import { overridable } from "@core/lib/overridable";

export const PageManagerComponent = overridable(({
    arcId, pages, isLoading, remove, removeAll, upload, onUploadSuccess, enableAll, disableAll, classes = styles,
}: PageManagerProps) =>
    <div className={classes.pageManager}>
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
            {isLoading && <div>Loading...</div>}
            {!isLoading && pages.length === 0 && <div className={classes.noPages}>
                <FontAwesomeIcon icon={faInfoCircle} /> No pages yet. Use the uploader below to add pages.
            </div>}
            {!isLoading && pages.length > 0 &&
                <ul className={classes.pageList}>
                    {pages.sort(sort.by(prop<IComicPage, "sortOrder">("sortOrder")).asc).map(page => <li key={page.id}>
                        <Card className={classes.pageEditor} size="small" title={page.name || page.url}>
                            <Link to={`/comic/arc/${arcId}/page/${page.id}`}>
                                <ComicImage fileName={page.imageUrl || ""} />
                            </Link>
                            <Row>
                                <Col xs={21}>
                                    <div className={classes.date}>
                                        <Typography.Text type={page.enabled ? "success" : "danger"}>
                                            {page.enabled && page.postDate ? new Date(page.postDate).toDateString() : "Disabled"}
                                        </Typography.Text>
                                    </div>
                                </Col>
                                <Col xs={3}>
                                    <div className={classes.controls}>
                                        <DeleteBtn entityType="page" onClick={remove(page.id)} />
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </li>)}
                </ul>
            }
            <Uploader upload={upload} onUploadSuccess={onUploadSuccess} />
        </Card>
    </div>
);
