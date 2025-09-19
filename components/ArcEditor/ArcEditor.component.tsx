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

export const ArcEditorComponent = ({
    history:{entity:arc}, updateString, updateToggle, UpdateButtons,
    uploadBanner, uploadThumbnail,
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
                <Card size="small" title="Summary">
                    <MarkdownEditor value={arc.summary || ""} onChange={updateString("summary")} />
                </Card>
                <PageManager arcId={arc.id} />
            </Col>
            <Col className={styles.images} span={8}>
                <Card size="small" title="Thumbnail">
                    {arc.thumbnailUrl && <S3Image className={styles.thumbnail} folderSetting="comicMediaFolder" fileName={arc.thumbnailUrl} />}
                    <Upload.Dragger
                        showUploadList={false}
                        customRequest={({file}) => uploadThumbnail(file as File)}
                    >
                        <FontAwesomeIcon icon={faUpload} /> Click or drag file to this area to upload
                    </Upload.Dragger>
                </Card>
                <Card size="small" title="Banner">
                    {arc.bannerUrl && <S3Image className={styles.banner} folderSetting="comicMediaFolder" fileName={arc.bannerUrl} />}
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
