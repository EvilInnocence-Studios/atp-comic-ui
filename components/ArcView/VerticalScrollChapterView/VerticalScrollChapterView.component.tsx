import { ComicImage } from "@comic/components/ComicImage";
import { overridable } from "@core/lib/overridable";
import { Col, Row } from "antd";
import Markdown from "react-markdown";
import { Link } from "react-router";
import { VerticalScrollChapterViewProps } from "./VerticalScrollChapterView.d";
import styles from './VerticalScrollChapterView.module.scss';
import { Date } from "@core/components/Date";

export const VerticalScrollChapterViewComponent = overridable(({chapters, arc, classes = styles}:VerticalScrollChapterViewProps) =>
    <div className={classes.verticalScrollChapters}>
        <h2 className={classes.arcName}>{arc?.name}</h2>
        <ul>
            {chapters.map(chapter =>
                <li key={chapter.id}>
                    <Row gutter={16} align="middle">
                        <Col xs={6} sm={5} md={4}>
                            <Link to={`/comic/arc/${chapter.url}`}>
                                {!!chapter.thumbnailUrl && <ComicImage fileName={chapter.thumbnailUrl} className={classes.thumbnail} />}
                            </Link>
                        </Col>
                        <Col xs={16} sm={17} md={18}>
                            <Row gutter={16}>
                                <Col md={16} xs={24}>
                                    <h2><Link to={`/comic/arc/${chapter.url}`}>
                                        {chapter.name}
                                    </Link></h2>
                                </Col>
                                <Col md={8} xs={24}>
                                    <Date date={chapter.postDate} noWeekday />
                                </Col>
                                <Col span={24}>
                                    <Markdown>{chapter.summary}</Markdown>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={2}>
                            <h2>#{chapter.index + 1}</h2>
                        </Col>
                        <Col span={24}>
                        </Col>
                    </Row>
                </li>
            )}
        </ul>
    </div>
);
