import { Editable } from "@core/components/Editable";
import { Label } from "@core/components/Label";
import { MarkdownEditor } from "@core/components/MarkdownEditor";
import { Card, Col, DatePicker, Row, Switch } from "antd";
import dayjs from "dayjs";
import { CharacterAssigner } from "../CharacterAssigner";
import { ComicImage } from "../ComicImage";
import { PageEditorProps } from "./PageEditor.d";
import styles from './PageEditor.module.scss';
import { overridable } from "@core/lib/overridable";

export const PageEditorComponent = overridable(({ page, updateString, updateToggle, UpdateButtons, classes = styles }: PageEditorProps) =>
    <div className={classes.pageEditor}>
        <Row gutter={16}>
            <Col xs={12}>
                <h1>
                    <Label label="Name">
                        <Editable value={page.name} onChange={updateString("name")} />
                    </Label>
                </h1>
                <Label label="URL">
                    <Editable value={page.url || ""} onChange={updateString("url")} />
                </Label>
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
