import { DeleteBtn } from "@core/components/DeleteBtn";
import { Editable } from "@core/components/Editable";
import { Label } from "@core/components/Label";
import { MarkdownEditor } from "@core/components/MarkdownEditor";
import { overridable } from "@core/lib/overridable";
import { faCaretDown, faCaretUp, faRefresh, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Col, Row, Select, Switch, Upload } from "antd";
import { ComicImage } from "../ComicImage";
import { PageManager } from "../PageManager";
import { ArcEditorProps } from "./ArcEditor.d";
import styles from './ArcEditor.module.scss';

export const ArcEditorComponent = overridable(({
    history: { entity: arc }, updateString, updateToggle, UpdateButtons,
    uploadBanner, uploadThumbnail, removeThumbnail, removeBanner,
    allArcs,
    setParent, moveUp, moveDown,
    classes = styles
}: ArcEditorProps) =>
    <div className={classes.arcEditor}>
        <Row gutter={16}>
            <Col className={classes.header} span={24}>
                <UpdateButtons className={classes.updateButtons} />
                <Switch checked={arc.enabled} onChange={updateToggle("enabled")} checkedChildren="Enabled" unCheckedChildren="Disabled" />
                <Select
                    className={classes.parentSelect}
                    style={{ width: 200 }}
                    onChange={setParent}
                    allowClear
                    placeholder="Set Parent"
                    showSearch
                    optionFilterProp="label"
                    options={[
                        { value: null, label: "--Root Arc--" },
                        ...allArcs.filter(a => a.id !== arc.id).map(a => ({ value: a.id, label: a.name }))
                    ]}
                />
                <Button className={classes.moveBtn} onClick={moveUp}><FontAwesomeIcon icon={faCaretUp} /> Move up</Button>
                <Button className={classes.moveBtn} onClick={moveDown}><FontAwesomeIcon icon={faCaretDown} /> Move down</Button>
            </Col>
            <Col span={16}>
                <h1><Label label="Name">
                    <Editable value={arc.name} onChange={updateString("name")} />
                </Label></h1>
                <div style={{position: "relative"}}>
                    <Label label="Url">
                        <Editable value={arc.url || ""} onChange={updateString("url")} placeholder="URL" />
                        <Button
                            onClick={() => {
                                const name = arc.name || "";
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
                <br />
                <Card size="small" title="Summary">
                    <MarkdownEditor value={arc.summary || ""} onChange={updateString("summary")} />
                </Card>
                <br />
                <Card size="small" title="Transcript">
                    <MarkdownEditor value={arc.transcript || ""} onChange={updateString("transcript")} />
                </Card>
                <br />
                {!arc.parentId && <Switch
                    checked={arc.isVerticalScroll}
                    onChange={updateToggle("isVerticalScroll")}
                    checkedChildren="Vertical Scroll"
                    unCheckedChildren="Paged Comic"
                />}
                <br /><br />
                <PageManager arcId={arc.id} />
            </Col>
            <Col className={classes.images} span={8}>
                <Card size="small" title="Thumbnail" extra={<DeleteBtn entityType="arc thumbnail" onClick={removeThumbnail} />}>
                    {arc.thumbnailUrl && <ComicImage className={classes.thumbnail} fileName={arc.thumbnailUrl} />}
                    <br />
                    <Upload.Dragger
                        showUploadList={false}
                        customRequest={({ file }) => uploadThumbnail(file as File)}
                    >
                        <FontAwesomeIcon icon={faUpload} /> Click or drag file to this area to upload
                    </Upload.Dragger>
                </Card>
                <br />
                <Card size="small" title="Banner" extra={<DeleteBtn entityType="arc banner" onClick={removeBanner} />}>
                    {arc.bannerUrl && <ComicImage className={classes.banner} fileName={arc.bannerUrl} />}
                    <br />
                    <Upload.Dragger
                        showUploadList={false}
                        customRequest={({ file }) => uploadBanner(file as File)}
                    >
                        <FontAwesomeIcon icon={faUpload} /> Click or drag file to this area to upload
                    </Upload.Dragger>
                </Card>
            </Col>
        </Row>
    </div>
);
