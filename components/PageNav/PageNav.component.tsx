import { Link } from "react-router";
import {PageNavProps} from "./PageNav.d";
import styles from './PageNav.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft, faAngleDoubleRight, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { S3Image } from "@core/components/S3Image";
import { ComicImage } from "../ComicImage";

export const PageNavComponent = ({firstPage, prevPage, lastPage, nextPage, arc}:PageNavProps) =>
    <div className={styles.comicNavLinksContainer} style={{textAlign: "center", fontSize: "x-large"}}>
        <div>
            {firstPage && prevPage && <Link to={`/comic/page/${(firstPage.url)}`}><FontAwesomeIcon icon={faAngleDoubleLeft} /></Link>}
            {firstPage && firstPage.imageUrl && <ComicImage className={styles.noShow} fileName={firstPage.imageUrl} />}
        </div>
        <div>
            {prevPage && <Link to={`/comic/page/${prevPage.url}`}><FontAwesomeIcon icon={faAngleLeft}/></Link>}
            {prevPage && prevPage.imageUrl && <ComicImage className={styles.noShow} fileName={prevPage.imageUrl} />}
        </div>
        {arc && <div><Link to={`/comic/arc/${arc.url}`}>Archives</Link></div>}
        <div>
            {nextPage && <Link to={`/comic/page/${nextPage.url}`}><FontAwesomeIcon icon={faAngleRight} /></Link>}
            {nextPage && nextPage.imageUrl && <ComicImage className={styles.noShow} fileName={nextPage.imageUrl} />}
        </div>
        <div>
            {lastPage && nextPage && <Link to={`/comic/page/${lastPage.url}`}><FontAwesomeIcon icon={faAngleDoubleRight} /></Link>}
            {lastPage && lastPage.imageUrl && <ComicImage className={styles.noShow} fileName={lastPage.imageUrl} />}
        </div>
    </div>;
