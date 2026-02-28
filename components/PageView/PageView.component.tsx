import { Date } from "@core/components/Date";
import { faClosedCaptioning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Markdown from "react-markdown";
import { Link } from "react-router-dom";
import { ComicImage } from "../ComicImage";
import { PageNav } from "../PageNav";
import { PageViewProps } from "./PageView.d";
import styles from './PageView.module.scss';
import { overridable } from "@core/lib/overridable";
import clsx from "clsx";
import { Col, Row } from "antd";

export const PageViewComponent = overridable(({ page, pageNumber, nextPage, transcript, classes = styles, className }: PageViewProps) => <>
    {!!page && <div className={clsx(classes.comicPage, className)}>
        <PageNav page={page} top />
        {!!nextPage && <Link to={`/comic/page/${nextPage.url}`}><ComicImage fileName={page.imageUrl || ""} /></Link>}
        {!nextPage && <ComicImage fileName={page.imageUrl || ""} />}
        <PageNav page={page} bottom />
        <Row gutter={8}>
            <Col xs={24} md={12} className={classes.pageDetails}>
                <h1>Page {pageNumber}: {page.name}</h1>
                <p><Date date={page.postDate} /></p>
            </Col>
            <Col xs={24} md={12} className={classes.pageTranscript}>
                <h1 onClick={transcript.toggle}><FontAwesomeIcon icon={faClosedCaptioning} /> Transcript</h1>
                {transcript.isset && <div className={classes.transcriptCopy}>
                    <Markdown>{page.transcript}</Markdown>
                </div>}
            </Col>
        </Row>
    </div>}
</>);