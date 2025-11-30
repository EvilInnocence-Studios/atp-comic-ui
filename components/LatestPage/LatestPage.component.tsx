import { overridable } from "@core/lib/overridable";
import { PageView } from "../PageView";
import { LatestPageProps } from "./LatestPage.d";

export const LatestPageComponent = overridable(({ pageUrl }: LatestPageProps) => <>
    {pageUrl && <PageView url={pageUrl} />}
</>);
