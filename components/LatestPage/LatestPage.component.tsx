import { BlueskyFeed } from "@common/components/BlueskyFeed";
import { Col, Row } from "antd";
import { PageView } from "../PageView";
import { LatestPageProps } from "./LatestPage.d";
import styles from "./LatestPage.module.scss";

export const LatestPageComponent = ({pageUrl}:LatestPageProps) => <>
    <Row gutter={16}>
        <Col xs={18}>
            {pageUrl && <PageView url={pageUrl} />}
        </Col>
        <Col xs={6} className={styles.newsFeed}>
            <h2>News Feed</h2>
            <BlueskyFeed pageSize={5} />
        </Col>
    </Row>    
</>;
