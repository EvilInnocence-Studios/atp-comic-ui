import { overridable } from "@core/lib/overridable";
import { faClosedCaptioning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Markdown from "react-markdown";
import { PageTranscriptProps } from "./PageTranscript.d";
import styles from './PageTranscript.module.scss';
import clsx from "clsx";

export const PageTranscriptComponent = overridable(({classes = styles, css, page, transcript, className}:PageTranscriptProps) => <>
    {css && <style>{css}</style>}
    <div className={clsx(classes.pageTranscript, className)}>
        <div className={clsx(classes.transcriptHeader, "transcriptHeader")} onClick={transcript.toggle}><FontAwesomeIcon icon={faClosedCaptioning} /> Transcript</div>
        {transcript.isset && <div className={classes.transcriptCopy}>
                <Markdown>{page?.transcript}</Markdown>
        </div>}
    </div>
</>);

