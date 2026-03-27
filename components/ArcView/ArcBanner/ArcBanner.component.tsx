import { ComicImage } from "@comic/components/ComicImage";
import { overridable } from "@core/lib/overridable";
import { ArcBannerProps } from "./ArcBanner.d";

export const ArcBannerComponent = overridable(({className, css, arc}:ArcBannerProps) => <>
    {css && <style>{css}</style>}
    {arc?.bannerUrl && <ComicImage 
        className={className}
        fileName={arc?.bannerUrl}
    />}
</>);
