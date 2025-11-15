import { BlueskyFeed } from "@common/components/BlueskyFeed";
import { PageView } from "../PageView";
import { LatestPageProps } from "./LatestPage.d";
import styles from "./LatestPage.module.scss";
import { comicPlugins } from "@comic";
import { Col, Row } from "antd";
import { overridable } from "@core/lib/overridable";

export const LatestPageComponent = overridable(({pageUrl}:LatestPageProps) => <>
    <Row className={styles.latestPage}>
        <Col xs={24} md={18} xl={{span: 16, push: 4}} className={styles.pageView}>
            {pageUrl && <PageView url={pageUrl} />}
            {comicPlugins.latestPage.extras.render({})}
        </Col>
        <Col xs={24} sm={24} md={6} xl={{span: 4, push: 4}}>
            <div className={styles.newsFeed}>
                <h2>News Feed</h2>
                <BlueskyFeed pageSize={5} />
            </div>
        </Col>
    </Row>
</>);
