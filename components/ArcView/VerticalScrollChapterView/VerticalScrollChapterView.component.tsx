import { ComicImage } from "@comic/components/ComicImage";
import { overridable } from "@core/lib/overridable";
import { Col, Row } from "antd";
import Markdown from "react-markdown";
import { Link } from "react-router";
import { ArcTitle } from "../ArcTitle";
import { VerticalScrollChapterViewProps } from "./VerticalScrollChapterView.d";
import styles from './VerticalScrollChapterView.module.scss';

export const VerticalScrollChapterViewComponent = overridable(({chapters, arc, classes = styles}:VerticalScrollChapterViewProps) =>
    <div className={classes.verticalScrollChapters}>
        <h2>{arc?.name}</h2>
        <ul>
            {chapters.map(chapter =>
                <li key={chapter.id}>
                    <Row gutter={16}>
                        <Col span={6}>
                            <Link to={`/comic/arc/${chapter.url}`}>
                                {!!chapter.thumbnailUrl && <ComicImage fileName={chapter.thumbnailUrl} className={classes.thumbnail} />}
                            </Link>
                        </Col>
                        <Col span={18}>
                            <h2><Link to={`/comic/arc/${chapter.url}`}>
                                <ArcTitle arc={chapter} />
                            </Link></h2>
                            <Markdown>{chapter.summary}</Markdown>
                        </Col>
                    </Row>
                </li>
            )}
        </ul>
    </div>
);
