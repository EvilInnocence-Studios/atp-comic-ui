import { IModule } from "@core/lib/module";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { ComponentRegistry, LayoutRegistry } from "@theming/lib/layout/componentRegistry";
import { uacPlugins } from "@uac/lib/plugin/slots";
import { ArcBanner } from "./components/ArcView/ArcBanner";
import { ArcDescription } from "./components/ArcView/ArcDescription";
import { ArcLink } from "./components/ArcView/ArcLink";
import { ArcNumber } from "./components/ArcView/ArcNumber";
import { ArcPageNumberList } from "./components/ArcView/ArcPageNumberList";
import { ArcThumbnail } from "./components/ArcView/ArcThumbnail";
import { ArcTitle } from "./components/ArcView/ArcTitle";
import { ArcType } from "./components/ArcView/ArcType";
import { SubArcList } from "./components/ArcView/SubArcList";
import { LatestArc } from "./components/LatestArc";
import { LatestPage } from "./components/LatestPage";
import { PageView } from "./components/PageView";
import { PageImage } from "./components/PageView/PageImage";
import { PageName } from "./components/PageView/PageName";
import { PageNav } from "./components/PageView/PageNav";
import { PageNumber } from "./components/PageView/PageNumber";
import { PagePostDate } from "./components/PageView/PagePostDate";
import { PageTranscript } from "./components/PageView/PageTranscript";
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

// Comic Pages
ComponentRegistry.register(LatestPage);
ComponentRegistry.register(LatestArc);

ComponentRegistry.register(PageImage);
ComponentRegistry.register(PagePostDate);
ComponentRegistry.register(PageName);
ComponentRegistry.register(PageNumber);
ComponentRegistry.register(PageNav);
ComponentRegistry.register(PageTranscript);
ComponentRegistry.register(PageView);
ComponentRegistry.register(ArcTitle);
ComponentRegistry.register(ArcBanner);
ComponentRegistry.register(ArcDescription);
ComponentRegistry.register(SubArcList);
ComponentRegistry.register(ArcType);
ComponentRegistry.register(ArcNumber);
ComponentRegistry.register(ArcThumbnail);
ComponentRegistry.register(ArcPageNumberList);
ComponentRegistry.register(ArcLink);

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
    description: "The layout and design for a comic page",
    defaultLayout: {
        component: "Empty"
    },
    priority: 500,
});

LayoutRegistry.register({
    name: "comicArchive",
    displayName: "Comic Archive Page Layout",
    description: "The layout and design for a comic page in the archives",
    defaultLayout: {
        component: "Empty"
    },
    priority: 500,
});

LayoutRegistry.register({
    name: "comicArc",
    displayName: "Comic Arc Layout",
    description: "The layout and design for an arc page",
    defaultLayout: {
        component: "Empty"
    },
    priority: 500,
});

LayoutRegistry.register({
    name: "comicVerticalScrollArc",
    displayName: "Comic Vertical Scroll Arc Layout",
    description: "The layout and design for a vertical scroll arc page",
    defaultLayout: {
        component: "Empty"
    },
    priority: 500,
});

LayoutRegistry.register({
    name: "comicVerticalScrollEpisode",
    displayName: "Comic Vertical Scroll Episode Layout",
    description: "The layout and design for a vertical scroll episode page",
    defaultLayout: {
        component: "Empty"
    },
    priority: 500,
});

LayoutRegistry.register({
    name: "comicArcListItem",
    displayName: "Comic Arc List Item Design",
    description: "The design for an arc list item",
    defaultLayout: {
        component: "Empty"
    },
    priority: 500,
});

LayoutRegistry.register({
    name: "comicVerticalScrollEpisodeListItem",
    displayName: "Comic Vertical Scroll Episode List Item Design",
    description: "The design for a vertical scroll episode list item",
    defaultLayout: {
        component: "Empty"
    },
    priority: 500,
});
