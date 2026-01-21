import { overridable } from "@core/lib/overridable";
import { PageView } from "../PageView";
import { RoutedPageProps } from "./RoutedPage.d";

export const RoutedPageComponent = overridable(({className, css, url}:RoutedPageProps) => <>
    {css && <style>{css}</style>}
    <PageView url={url} className={className} />
</>);

