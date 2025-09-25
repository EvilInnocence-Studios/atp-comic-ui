import { Editable } from "@core/components/Editable";
import { Label } from "@core/components/Label";
import { MarkdownEditor } from "@core/components/MarkdownEditor";
import { S3Image } from "@core/components/S3Image";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Col, Row, Switch, Upload } from "antd";
import { PageManager } from "../PageManager";
import { ArcEditorProps } from "./ArcEditor.d";
import styles from './ArcEditor.module.scss';
import { DeleteBtn } from "@core/components/DeleteBtn";
import { ComicImage } from "../ComicImage";

export const ArcEditorComponent = ({
    history:{entity:arc}, updateString, updateToggle, UpdateButtons,
    uploadBanner, uploadThumbnail, removeThumbnail, removeBanner,
}:ArcEditorProps) =>
    <div className={styles.arcEditor}>
        <Row gutter={16}>
            <Col className={styles.header} span={24}>
                <UpdateButtons className={styles.updateButtons} />
                <Switch checked={arc.enabled} onChange={updateToggle("enabled")} checkedChildren="Enabled" unCheckedChildren="Disabled"/>
            </Col>
            <Col span={16}>
                <h1><Label label="Name">
                    <Editable value={arc.name} onChange={updateString("name")} />
                </Label></h1>
                <div>
                    <Label label="Url">
                        <Editable value={arc.url || ""} onChange={updateString("url")} placeholder="URL" />
                    </Label>
                </div>
                <br/>
                <Card size="small" title="Summary">
                    <MarkdownEditor value={arc.summary || ""} onChange={updateString("summary")} />
                </Card>
                <br/>
                <PageManager arcId={arc.id} />
            </Col>
            <Col className={styles.images} span={8}>
                <Card size="small" title="Thumbnail" extra={<DeleteBtn entityType="arc thumbnail" onClick={removeThumbnail} />}>
                    {arc.thumbnailUrl && <ComicImage className={styles.thumbnail} fileName={arc.thumbnailUrl} />}
                    <br/>
                    <Upload.Dragger
                        showUploadList={false}
                        customRequest={({file}) => uploadThumbnail(file as File)}
                    >
                        <FontAwesomeIcon icon={faUpload} /> Click or drag file to this area to upload
                    </Upload.Dragger>
                </Card>
                <br/>
                <Card size="small" title="Banner" extra={<DeleteBtn entityType="arc banner" onClick={removeBanner} />}>
                    {arc.bannerUrl && <ComicImage className={styles.banner} fileName={arc.bannerUrl} />}
                    <br/>
                    <Upload.Dragger
                        showUploadList={false}
                        customRequest={({file}) => uploadBanner(file as File)}
                    >
                        <FontAwesomeIcon icon={faUpload} /> Click or drag file to this area to upload
                    </Upload.Dragger>
                </Card>
            </Col>
        </Row>
    </div>;
