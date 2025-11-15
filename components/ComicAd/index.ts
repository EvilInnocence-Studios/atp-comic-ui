import { overridable } from "@core/lib/overridable";
import { SizedComicAdComponent } from "./ComicAd.component";

export { ComicAd } from "./ComicAd.container";

export const BannerAd          = overridable(SizedComicAdComponent(  468,  60 ));
export const LeaderboardAd     = overridable(SizedComicAdComponent(  728,  90 ));
export const SquareAd          = overridable(SizedComicAdComponent(  300, 250 ));
export const HalfBannerAd      = overridable(SizedComicAdComponent(  234,  60 ));
export const SkyscraperAd      = overridable(SizedComicAdComponent(  120, 600 ));
export const ButtonAd          = overridable(SizedComicAdComponent(  120,  60 ));
export const WideSkyscraperAd  = overridable(SizedComicAdComponent(  160, 600 ));
export const HalfSkyscraperAd  = overridable(SizedComicAdComponent(  160, 300 ));
export const BillboardAd       = overridable(SizedComicAdComponent( 1000, 250 ));
export const SlimLeaderboardAd = overridable(SizedComicAdComponent(  728,  45 ));
export const SquareButtonAd    = overridable(SizedComicAdComponent(  125, 125 ));
