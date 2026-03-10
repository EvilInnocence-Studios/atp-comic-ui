import { ComicPageUrlContext } from "@comic/lib/context";
import { overridable } from "@core/lib/overridable";
import { Layout } from "@theming/components/Layout";
import { Col, Row } from "antd";
import clsx from "clsx";
import { PageNav } from "../PageNav";
import { PageImage } from "./PageImage";
import { PageName } from "./PageName";
import { PageNumber } from "./PageNumber";
import { PagePostDate } from "./PagePostDate";
import { PageViewProps } from "./PageView.d";
import styles from './PageView.module.scss';
import { PageTranscript } from "./PageTranscript";

const Provider = ComicPageUrlContext.Provider;

export const PageViewComponent = overridable(({url, page, classes = styles, className }: PageViewProps) => <>
    {!!page && <div className={clsx(classes.comicPage, className)}>
        <Layout element="comicPage" context={url} />
        <Provider value={url || ""}>
            <PageNav page={page} top />
            <PageImage />
            <PageNav page={page} bottom />
            <Row gutter={8}>
                <Col xs={24} md={12} className={classes.pageDetails}>
                    <h1>Page <PageNumber />: <PageName /></h1>
                    <p><PagePostDate /></p>
                </Col>
                <Col xs={24} md={12} className={classes.pageTranscript}>
                    <PageTranscript />
                </Col>
            </Row>
        </Provider>
    </div>}
</>);