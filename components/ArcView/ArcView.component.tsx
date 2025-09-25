import { Link } from "react-router";
import { ComicImage } from "../ComicImage";
import {ArcViewProps} from "./ArcView.d";
import styles from './ArcView.module.scss';
import Markdown from 'react-markdown';

export const ArcViewComponent = ({arc, subArcs, pages, parents}:ArcViewProps) =>  <div className={styles.arcContainer}>
    {!!arc && <>
        <div className={styles.arcDetails}>
            {!!arc.bannerUrl && <ComicImage fileName={arc.bannerUrl} className={styles.banner}/>}
            <h1>{arc.name}</h1>
            <Markdown>{arc.summary}</Markdown>
            <ul className={styles.breadCrumbs}>
                {parents.map(({id, name, url}) =>
                    <li key={id}>
                        <Link to={`/comic/arc/${url}`}>{name}</Link>
                    </li>
                )}
            </ul>
        </div>
        <div className={styles.subArcs}>
            {subArcs.map(subArc =>
                <div key={subArc.id} className={styles.listItem}>
                    <Link to={`/comic/arc/${subArc.url}`}>
                        {!!subArc.thumbnailUrl && <ComicImage fileName={subArc.thumbnailUrl} className={styles.thumbnail}/>}
                        {!subArc.thumbnailUrl && <>Need missing thumbnail image TaggedImage</>}
                        <div className={styles.title}>{subArc.name}</div>
                    </Link>
                </div>
            )}
        </div>
        <div className={styles.arcPages}>
            {pages.map(page =>
                <div className={styles.listItem} key={page.id}>
                    <Link to={`/comic/page/${page.url}`}>
                        <ComicImage fileName={page.imageUrl || ""} className={styles.thumbnail}/>
                        <div className={styles.title}>{page.name}</div>
                    </Link>
                </div>
            )}
        </div>
    </>}
</div>;
