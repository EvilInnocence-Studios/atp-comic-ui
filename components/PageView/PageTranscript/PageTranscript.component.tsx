import { overridable } from "@core/lib/overridable";
import { faClosedCaptioning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Markdown from "react-markdown";
import { PageTranscriptProps } from "./PageTranscript.d";
import styles from './PageTranscript.module.scss';

export const PageTranscriptComponent = overridable(({classes = styles, __layoutId, css, page, transcript}:PageTranscriptProps) => <>
    {css && <style>{css}</style>}
    <div className={classes.pageTranscript}>
        <h1 onClick={transcript.toggle}><FontAwesomeIcon icon={faClosedCaptioning} /> Transcript</h1>
        {transcript.isset && <div className={classes.transcriptCopy}>
                {!__layoutId && <Markdown>{page?.transcript}</Markdown>}
                {!!__layoutId && "Page transcript goes here."}
        </div>}
    </div>
</>);

