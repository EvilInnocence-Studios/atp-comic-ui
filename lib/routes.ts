import { ArcManager } from "@comic/components/ArcManager";
import { ArcView } from "@comic/components/ArcView";
import { CharacterManager } from "@comic/components/CharacterManager";
import { CharactersPage } from "@comic/components/CharactersPage";
import { LatestPage } from "@comic/components/LatestPage";
import { PageEditor } from "@comic/components/PageEditor";
import { PageView } from "@comic/components/PageView";
import { withRoute } from "@core/lib/withRoute";

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
        {path: "/comic/page/:url",  component: withRoute(PageView)},
        {path: "/comic/arc/:url",   component: withRoute(ArcView)},
        {path: "/comic/characters", component: CharactersPage}
    ],
}