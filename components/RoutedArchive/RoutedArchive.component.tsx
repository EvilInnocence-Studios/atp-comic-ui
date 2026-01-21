import { overridable } from "@core/lib/overridable";
import {RoutedArchiveProps} from "./RoutedArchive.d";
import { ArcView } from "../ArcView";

export const RoutedArchiveComponent = overridable(({className, css, url}:RoutedArchiveProps) => <>
    {css && <style>{css}</style>}
    <ArcView className={className} url={url} />
</>);

