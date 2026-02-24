import { Editable } from "@core/components/Editable";
import { Label } from "@core/components/Label";
import { MarkdownEditor } from "@core/components/MarkdownEditor";
import { overridable } from "@core/lib/overridable";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Col, DatePicker, Row, Switch } from "antd";
import dayjs from "dayjs";
import { CharacterAssigner } from "../CharacterAssigner";
import { ComicImage } from "../ComicImage";
import { PageEditorProps } from "./PageEditor.d";
import styles from './PageEditor.module.scss';

export const PageEditorComponent = overridable(({ page, updateString, updateToggle, UpdateButtons, classes = styles }: PageEditorProps) =>
    <div className={classes.pageEditor}>
        <Row gutter={16}>
            <Col xs={12}>
                <h1>
                    <Label label="Name">
                        <Editable value={page.name} onChange={updateString("name")} />
                    </Label>
                </h1>
                <div style={{position: "relative"}}>
                    <Label label="URL">
                        <Editable value={page.url || ""} onChange={updateString("url")} />
                        <Button
                            onClick={() => {
                                const name = page.name || "";
                                const url = name.replace(/\s+/g, "-").toLowerCase();
                                updateString("url")(url);
                            }}
                            type="link"
                            style={{
                                position: "absolute",
                                right: 0,
                                top: "50%",
                                transform: "translateY(-50%)",
                                width: "24px",
                                height: "24px",
                                background: "transparent",
                                border: "none",
                            }}
                        >
                            <FontAwesomeIcon icon={faRefresh} />
                        </Button>
                    </Label>
                </div>
            </Col>
            <Col className={classes.controls} xs={12}>
                <UpdateButtons />
                <br /><br />
                <Switch checked={page.enabled} onChange={updateToggle("enabled")} checkedChildren="Enabled" unCheckedChildren="Disabled" />
                <br /><br />
                <DatePicker
                    style={{ marginLeft: 16 }}
                    value={page.postDate ? dayjs(page.postDate) : null}
                    onChange={(date) => updateString("postDate")(date ? date.toISOString() : "")}
                    placeholder="Post Date"
                />
            </Col>
            <Col xs={8}>
                <Card className={classes.image} size="small" title="Page Image">
                    <ComicImage fileName={page.imageUrl || ""} />
                </Card>
            </Col>
            <Col xs={16}>
                <Row gutter={16}>
                    <Col xs={12}>
                        <Card size="small" title="Transcript">
                            <MarkdownEditor value={page.transcript || ""} onChange={updateString("transcript")} />
                        </Card>
                    </Col>
                    <Col xs={12}>
                        <CharacterAssigner pageId={page.id} />
                    </Col>
                    <Col xs={24}>
                        Commentary editor goes here.
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>
);
