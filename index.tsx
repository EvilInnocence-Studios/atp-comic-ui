import { IModule } from "@core/lib/module";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { ComponentRegistry, LayoutRegistry } from "@theming/lib/layout/componentRegistry";
import { uacPlugins } from "@uac/lib/plugin/slots";
import { ArcBanner } from "./components/ArcView/ArcBanner";
import { ArcDate } from "./components/ArcView/ArcDate";
import { ArcDescription } from "./components/ArcView/ArcDescription";
import { ArcLink } from "./components/ArcView/ArcLink";
import { ArcNav } from "./components/ArcView/ArcNav";
import { ArcNumber } from "./components/ArcView/ArcNumber";
import { ArcPageNumberList } from "./components/ArcView/ArcPageNumberList";
import { ArcPages } from "./components/ArcView/ArcPages";
import { ArcParentLinks } from "./components/ArcView/ArcParentLinks";
import { ArcThumbnail } from "./components/ArcView/ArcThumbnail";
import { ArcTitle } from "./components/ArcView/ArcTitle";
import { ArcType } from "./components/ArcView/ArcType";
import { EpisodeImages } from "./components/ArcView/EpisodeImages";
import { SubArcList } from "./components/ArcView/SubArcList";
import { CharacterAppearances } from "./components/CharacterView/CharacterAppearances";
import { CharacterAttributes } from "./components/CharacterView/CharacterAttributes";
import { CharacterBio } from "./components/CharacterView/CharacterBio";
import { CharacterMedia } from "./components/CharacterView/CharacterMedia";
import { CharacterName } from "./components/CharacterView/CharacterName";
import { CharacterThumbnail } from "./components/CharacterView/CharacterThumbnail";
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
ComponentRegistry.register(ArcDate);
ComponentRegistry.register(EpisodeImages);
ComponentRegistry.register(ArcParentLinks);
ComponentRegistry.register(ArcPages);
ComponentRegistry.register(ArcNav);
ComponentRegistry.register(CharacterName);
ComponentRegistry.register(CharacterThumbnail);
ComponentRegistry.register(CharacterBio);
ComponentRegistry.register(CharacterAttributes);
ComponentRegistry.register(CharacterAppearances);
ComponentRegistry.register(CharacterMedia);

uacPlugins.myAccount.tabs.register({
    key: "comics",
    title: "Comic Preferences",
    icon: faImage,
    priority: 500,
    component: UserPreferences as any,
});

LayoutRegistry.register({
    name: "comicPage",
    displayName: "Comic Page",
    description: "The layout and design for a comic page",
    defaultLayout: {
        component: "Empty"
    },
    priority: 500,
});

LayoutRegistry.register({
    name: "comicArchive",
    displayName: "Comic Archive Page",
    description: "The layout and design for a comic page in the archives",
    defaultLayout: {
        component: "Empty"
    },
    priority: 500,
});

LayoutRegistry.register({
    name: "comicArc",
    displayName: "Comic Arc",
    description: "The layout and design for an arc page",
    defaultLayout: {
        component: "Empty"
    },
    priority: 500,
});

LayoutRegistry.register({
    name: "comicVerticalScrollArc",
    displayName: "Comic Vertical Scroll Chapter List",
    description: "The layout and design for a vertical scroll arc page",
    defaultLayout: {
        component: "Empty"
    },
    priority: 500,
});

LayoutRegistry.register({
    name: "comicVerticalScrollEpisode",
    displayName: "Comic Vertical Scroll Episode",
    description: "The layout and design for a vertical scroll episode page",
    defaultLayout: {
        component: "Empty"
    },
    priority: 500,
});

LayoutRegistry.register({
    name: "comicArcListItem",
    displayName: "Comic Arc List Item",
    description: "The design for an arc in the arc list",
    defaultLayout: {
        component: "Empty"
    },
    priority: 500,
});

LayoutRegistry.register({
    name: "comicVerticalScrollEpisodeListItem",
    displayName: "Comic Vertical Scroll Episode List Item",
    description: "The design for an episode in the vertical scroll chapter list",
    defaultLayout: {
        component: "Empty"
    },
    priority: 500,
});

LayoutRegistry.register({
    name: "comicCharacter",
    displayName: "Comic Character",
    description: "The layout and design for a character details section",
    defaultLayout: {
        component: "Empty"
    },
    priority: 500,
});
