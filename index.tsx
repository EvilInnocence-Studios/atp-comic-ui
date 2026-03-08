import { IModule } from "@core/lib/module";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { ComponentRegistry, LayoutRegistry } from "@theming/lib/layout/componentRegistry";
import { uacPlugins } from "@uac/lib/plugin/slots";
import { LatestArc } from "./components/LatestArc";
import { LatestPage } from "./components/LatestPage";
import { RoutedArchive } from "./components/RoutedArchive";
import { RoutedPage } from "./components/RoutedPage";
import { UserPreferences } from "./components/UserPreferences";
import { comicMenus } from "./lib/menus";
import { comicRoutes } from "./lib/routes";
import { comicSettings } from "./lib/settings";
import { ComicPageUrlContext } from "./lib/context";

export const module: IModule = {
    name: "comic",
    menus: comicMenus,
    routes: comicRoutes,
    settings: comicSettings,
}

// Comic Pages
ComponentRegistry.register(LatestPage);
ComponentRegistry.register(LatestArc);
ComponentRegistry.register(RoutedArchive);
ComponentRegistry.register(RoutedPage);

uacPlugins.myAccount.tabs.register({
    key: "comics",
    title: "Comic Preferences",
    icon: faImage,
    priority: 500,
    component: UserPreferences as any,
});

LayoutRegistry.register({
    name: "comicPage",
    displayName: "Comic Page Layout",
    description: "The comic page layout and design",
    defaultLayout: {
        component: "Empty"
    },
    priority: 500,
    context: {
        name: "comicPage",
        context: ComicPageUrlContext,
    }
});
