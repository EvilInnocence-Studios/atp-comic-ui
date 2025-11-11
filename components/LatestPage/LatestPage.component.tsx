import { BlueskyFeed } from "@common/components/BlueskyFeed";
import { PageView } from "../PageView";
import { LatestPageProps } from "./LatestPage.d";
import styles from "./LatestPage.module.scss";
import { comicPlugins } from "@comic";
import { Col, Row } from "antd";

export const LatestPageComponent = ({pageUrl}:LatestPageProps) => <>
    <Row className={styles.latestPage}>
        <Col xs={24} md={18} xl={{span: 12, push: 6}} className={styles.pageView}>
            {pageUrl && <PageView url={pageUrl} />}
            {comicPlugins.latestPage.extras.render({})}
        </Col>
        <Col xs={24} sm={24} md={6} xl={{span: 6, push: 6}}>
            <div className={styles.newsFeed}>
                <h2>News Feed</h2>
                <BlueskyFeed pageSize={5} />
            </div>
        </Col>
    </Row>
</>;
