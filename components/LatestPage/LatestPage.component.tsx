import { BlueskyFeed } from "@common/components/BlueskyFeed";
import { PageView } from "../PageView";
import { LatestPageProps } from "./LatestPage.d";
import { Col, Row } from "antd";

export const LatestPageComponent = ({pageUrl}:LatestPageProps) => <>
    <Row gutter={16}>
        <Col xs={8}>
            <h2>News Feed</h2>
            <BlueskyFeed />
        </Col>
        <Col xs={16}>
            {pageUrl && <PageView url={pageUrl} />}
        </Col>
    </Row>    
</>;
