import { IComicPage } from "@comic-shared/page/types";
import { DeleteBtn } from "@core/components/DeleteBtn";
import { S3Image } from "@core/components/S3Image";
import { Uploader } from "@core/components/Uploader";
import { Card, Typography } from "antd";
import { Link } from "react-router";
import { prop, sort } from "ts-functional";
import { PageManagerProps } from "./PageManager.d";
import styles from './PageManager.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export const PageManagerComponent = ({arcId, pages, isLoading, remove, upload, onUploadSuccess}:PageManagerProps) =>
    <div className={styles.pageManager}>
        <Card size="small" title="Pages">
            {isLoading && <div>Loading...</div>}
            {!isLoading && pages.length === 0 && <div className={styles.noPages}>
                <FontAwesomeIcon icon={faInfoCircle} /> No pages yet. Use the uploader below to add pages.
            </div>}
            {!isLoading && pages.length > 0 && 
                <ul className={styles.pageList}>
                    {pages.sort(sort.by(prop<IComicPage, "sortOrder">("sortOrder")).asc).map(page => <li key={page.id}>
                        <Card className={styles.pageEditor} size="small" title={page.name || page.url}>
                            <Link to={`/comic/arc/${arcId}/page/${page.id}`}>
                                <S3Image folderSetting="comicMediaFolder" fileName={page.imageUrl || ""} />
                            </Link>
                            <div className={styles.date}>
                                <Typography.Text type={page.enabled ? "success" : "danger"}>
                                    {page.enabled && page.postDate ? new Date(page.postDate).toDateString() : "Disabled"}
                                </Typography.Text>
                            </div>
                            <div className={styles.controls}>
                                <DeleteBtn entityType="page" onClick={remove(page.id)} />
                            </div>
                        </Card>
                    </li>)}
                </ul>
            }
            <Uploader upload={upload} onUploadSuccess={onUploadSuccess} />
        </Card>
    </div>;
