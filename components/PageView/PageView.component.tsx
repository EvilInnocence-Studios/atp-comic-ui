import { Date } from "@core/components/Date";
import { faClosedCaptioning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Markdown from "react-markdown";
import { Link } from "react-router";
import { ComicImage } from "../ComicImage";
import { PageNav } from "../PageNav";
import { PageViewProps } from "./PageView.d";
import styles from './PageView.module.scss';

export const PageViewComponent = ({page, pageNumber, nextPage, transcript}:PageViewProps) => <>
    {!!page && <div className={styles.comicPage}>
        <PageNav page={page} top />
        {!!nextPage && <Link to={`/comic/page/${nextPage.url}`}><ComicImage fileName={page.imageUrl || ""} /></Link>}
        {!nextPage && <ComicImage fileName={page.imageUrl || ""} />}
        <PageNav page={page} bottom />
        <div className={styles.pageDetails}>
            <h1>Page {pageNumber}: {page.name}</h1>
            <p><Date date={page.postDate} /></p>
        </div>
        <div className={styles.pageTranscript}>
            <h1 onClick={transcript.toggle}><FontAwesomeIcon icon={faClosedCaptioning} /> Transcript</h1>
            {transcript.isset && <div className={styles.transcriptCopy}>
                <Markdown>{page.transcript}</Markdown>
            </div>}
        </div>
    </div>}
</>;