import { ComicImage } from "@comic/components/ComicImage";
import { overridable } from "@core/lib/overridable";
import { ArcThumbnailProps } from "./ArcThumbnail.d";

export const ArcThumbnailComponent = overridable(({className, css, arc}:ArcThumbnailProps) => <>
    {css && <style>{css}</style>}
    {arc?.thumbnailUrl && <ComicImage 
        className={className}
        fileName={arc?.thumbnailUrl}
    />}
</>);

