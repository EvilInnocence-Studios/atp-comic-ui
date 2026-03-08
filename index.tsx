import { IModule } from "@core/lib/module";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { ComponentRegistry } from "@theming/lib/layout/componentRegistry";
import { uacPlugins } from "@uac/lib/plugin/slots";
import { LatestArc } from "./components/LatestArc";
import { LatestPage } from "./components/LatestPage";
import { RoutedArchive } from "./components/RoutedArchive";
import { RoutedPage } from "./components/RoutedPage";
import { UserPreferences } from "./components/UserPreferences";
import { comicMenus } from "./lib/menus";
import { comicRoutes } from "./lib/routes";
import { comicSettings } from "./lib/settings";
import { ComicAd, BannerAd, LeaderboardAd, SquareAd, HalfBannerAd, SkyscraperAd, ButtonAd, WideSkyscraperAd, HalfSkyscraperAd, BillboardAd, SlimLeaderboardAd, SquareButtonAd } from "./components/ComicAd";

export const module: IModule = {
    name: "comic",
    menus: comicMenus,
    routes: comicRoutes,
    settings: comicSettings,
}

ComponentRegistry.register(LatestPage);
ComponentRegistry.register(LatestArc);
ComponentRegistry.register(RoutedArchive);
ComponentRegistry.register(RoutedPage);
ComponentRegistry.register(ComicAd);
ComponentRegistry.register(BannerAd);
ComponentRegistry.register(LeaderboardAd);
ComponentRegistry.register(SquareAd);
ComponentRegistry.register(HalfBannerAd);
ComponentRegistry.register(SkyscraperAd);
ComponentRegistry.register(ButtonAd);
ComponentRegistry.register(WideSkyscraperAd);
ComponentRegistry.register(HalfSkyscraperAd);
ComponentRegistry.register(BillboardAd);
ComponentRegistry.register(SlimLeaderboardAd);
ComponentRegistry.register(SquareButtonAd);

uacPlugins.myAccount.tabs.register({
    key: "comics",
    title: "Comic Preferences",
    icon: faImage,
    priority: 500,
    component: UserPreferences as any,
});
