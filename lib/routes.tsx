import { ArcManager } from "@comic/components/ArcManager";
import { CharacterManager } from "@comic/components/CharacterManager";
import { CharactersPage } from "@comic/components/CharactersPage";
import { LatestPage } from "@comic/components/LatestPage";
import { PageEditor } from "@comic/components/PageEditor";
import { withRoute } from "@core/lib/withRoute";
import { Layout } from "@theming/components/Layout";

export const comicRoutes = {
    admin: [
        {path: "/comic/arc",                     component: ArcManager},
        {path: "/comic/arc/:arcId",              component: withRoute(ArcManager)},
        {path: "/comic/arc/:arcId/page/:pageId", component: withRoute(PageEditor)},
        {path: "/comic/character",               component: CharacterManager},
        {path: "/comic/character/:characterId",  component: withRoute(CharacterManager)},
    ],
    public: [
        {path: "/comic",            component: LatestPage},
        {path: "/comic/page/:url",  component: () => <Layout element="comicPage" />},
        {path: "/comic/arc/:url",   component: () => <Layout element="comicArchives" />},
        {path: "/comic/characters", component: CharactersPage}
    ],
}