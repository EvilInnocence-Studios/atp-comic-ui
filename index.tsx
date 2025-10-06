import { useSetting } from "@common/lib/setting/services";
import { IModule } from "@core/lib/module";
import { sitePlugins } from "@common/index";
import { LatestPage } from "./components/LatestPage";
import { comicMenus } from "./lib/menus";
import { comicRoutes } from "./lib/routes";
import { comicSettings } from "./lib/settings";
import { uacPlugins } from "@uac/lib/plugin/slots";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { UserPreferences } from "./components/UserPreferences";

export const module:IModule = {
    name: "comic",
    menus: comicMenus,
    routes: comicRoutes,
    settings: comicSettings,
}

sitePlugins.homepage.register(75, () => {
    const showLatestPage = useSetting("homepage.showLatestComicPage") === "true";
    return showLatestPage ? <LatestPage /> : null;
})

uacPlugins.myAccount.tabs.register({
    key: "comics",
    title: "Comic Preferences",
    icon: faImage,
    priority: 500,
    component: UserPreferences,
});
