import { ComicPageUrlContext } from "@comic/lib/context";
import { overridable } from "@core/lib/overridable";
import { Layout } from "@theming/components/Layout";
import clsx from "clsx";
import { ArchivePageProps } from "./ArchivePage.d";
import styles from './ArchivePage.module.scss';

const Provider = ComicPageUrlContext.Provider;

export const ArchivePageComponent = overridable(({classes = styles, className, url}:ArchivePageProps) => <>
    <div className={clsx(classes.comicArchive, className)}>
        <Provider value={url || ""}>
            <Layout element="comicArchive" />
        </Provider>
    </div>
</>);

