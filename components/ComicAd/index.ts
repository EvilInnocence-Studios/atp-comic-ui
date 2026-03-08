import { overridable } from "@core/lib/overridable";
import { SizedComicAdComponent } from "./ComicAd.component";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import icon from "./icon.svg";
import { SizedComicAdPropEditor } from "./ComicAd.props";
import { connectSizedComicAd } from "./ComicAd.container";
import { ISizedComicAdInputProps } from "./ComicAd.d";

export { ComicAd } from "./ComicAd.container";

const registerSizedAd = (name: string, description: string, width: number, height: number) => {
    return withLayoutMetadata(
        overridable<ISizedComicAdInputProps>(connectSizedComicAd(SizedComicAdComponent(width, height))),
        {
            name,
            category: "ComicAd",
            icon,
            displayName: name,
            description,
            propEditor: SizedComicAdPropEditor,
        }
    );
};

export const BannerAd = registerSizedAd("Banner Ad", "468x60 Banner", 468, 60);
export const LeaderboardAd = registerSizedAd("Leaderboard Ad", "728x90 Leaderboard", 728, 90);
export const SquareAd = registerSizedAd("Square Ad", "300x250 Square", 300, 250);
export const HalfBannerAd = registerSizedAd("Half Banner Ad", "234x60 Half Banner", 234, 60);
export const SkyscraperAd = registerSizedAd("Skyscraper Ad", "120x600 Skyscraper", 120, 600);
export const ButtonAd = registerSizedAd("Button Ad", "120x60 Button", 120, 60);
export const WideSkyscraperAd = registerSizedAd("Wide Skyscraper", "160x600 Wide Skyscraper", 160, 600);
export const HalfSkyscraperAd = registerSizedAd("Half Skyscraper", "160x300 Half Skyscraper", 160, 300);
export const BillboardAd = registerSizedAd("Billboard Ad", "1000x250 Billboard", 1000, 250);
export const SlimLeaderboardAd = registerSizedAd("Slim Leaderboard", "728x45 Slim Leaderboard", 728, 45);
export const SquareButtonAd = registerSizedAd("Square Button Ad", "125x125 Square Button", 125, 125);
