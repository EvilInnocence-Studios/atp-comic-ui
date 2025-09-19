import { ArcManager } from "@comic/components/ArcManager";
import { CharacterManager } from "@comic/components/CharacterManager";
import { withRoute } from "@core/lib/withRoute";

export const comicRoutes = {
    admin: [
        {path: "/comic/arc",                     component: ArcManager},
        {path: "/comic/arc/:arcId",              component: withRoute(ArcManager)},
        {path: "/comic/arc/:arcId/page/:pageId", component: withRoute(ArcManager)},
        {path: "/comic/character",               component: CharacterManager},
        {path: "/comic/character/:characterId",  component: withRoute(CharacterManager)},
    ],
    public: [

    ],
}