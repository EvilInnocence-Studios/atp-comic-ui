import { ComicPageUrlContext } from "@comic/lib/context";
import { overridable } from "@core/lib/overridable";
import { Layout } from "@theming/components/Layout";
import clsx from "clsx";
import { PageViewProps } from "./PageView.d";
import styles from './PageView.module.scss';

const Provider = ComicPageUrlContext.Provider;

export const PageViewComponent = overridable(({url, page, classes = styles, className }: PageViewProps) => <>
    {!!page && <div className={clsx(classes.comicPage, className)}>
        <Provider value={url || ""}>
            <Layout element="comicPage" />
        </Provider>
    </div>}
</>);