import { BlueskyFeed } from "@common/components/BlueskyFeed";
import { PageView } from "../PageView";
import { LatestPageProps } from "./LatestPage.d";
import styles from "./LatestPage.module.scss";

export const LatestPageComponent = ({pageUrl}:LatestPageProps) => <>
    <div className={styles.latestPage}>
        <div className={styles.pageView}>
            {pageUrl && <PageView url={pageUrl} />}
        </div>
        <div className={styles.newsFeed}>
            <h2>News Feed</h2>
            <BlueskyFeed pageSize={5} />
        </div>
    </div>
</>;
