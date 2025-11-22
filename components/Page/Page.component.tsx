import { overridable } from "@core/lib/overridable";
import { PageView } from "../PageView";
import { PageProps } from "./Page.d";

export const PageComponent = overridable(({ url }: PageProps) =>
    <PageView url={url} />
);
