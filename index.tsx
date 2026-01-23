import { IModule } from "@core/lib/module";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { ComponentRegistry, LayoutRegistry } from "@theming/lib/layout/componentRegistry";
import { uacPlugins } from "@uac/lib/plugin/slots";
import { LatestPage } from "./components/LatestPage";
import { RoutedArchive } from "./components/RoutedArchive";
import { RoutedPage } from "./components/RoutedPage";
import { UserPreferences } from "./components/UserPreferences";
import { comicMenus } from "./lib/menus";
import { comicRoutes } from "./lib/routes";
import { comicSettings } from "./lib/settings";

export const module: IModule = {
    name: "comic",
    menus: comicMenus,
    routes: comicRoutes,
    settings: comicSettings,
}

ComponentRegistry.register(LatestPage);
ComponentRegistry.register(RoutedArchive);
ComponentRegistry.register(RoutedPage);

uacPlugins.myAccount.tabs.register({
    key: "comics",
    title: "Comic Preferences",
    icon: faImage,
    priority: 500,
    component: UserPreferences as any,
});

LayoutRegistry.register({name: "comicPage", displayName: "Comic Page", description: "The comic page layout and design", defaultLayout: {
    component: "RoutedPage"
}});
