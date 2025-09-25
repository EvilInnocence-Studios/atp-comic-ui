import { PageView } from "../PageView";
import {LatestPageProps} from "./LatestPage.d";

export const LatestPageComponent = ({pageUrl}:LatestPageProps) => <>
    {pageUrl && <PageView url={pageUrl} />}
</>;
