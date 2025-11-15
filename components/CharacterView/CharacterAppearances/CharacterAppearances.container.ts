import { IComicPage } from "@comic-shared/page/types";
import { useStory } from "@comic/lib/useStory";
import { useSetting } from "@common/lib/setting/services";
import { services } from "@core/lib/api";
import { overridable } from "@core/lib/overridable";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { createInjector, inject, mergeProps } from "unstateless";
import { CharacterAppearancesComponent } from "./CharacterAppearances.component";
import { CharacterAppearancesProps, ICharacterAppearancesInputProps, ICharacterAppearancesProps } from "./CharacterAppearances.d";

const injectCharacterAppearancesProps = createInjector(({characterId}:ICharacterAppearancesInputProps):ICharacterAppearancesProps => {
    const [pageIds, setPageIds] = useState<string[]>([]);
    const [pages, setPages] = useState<Array<{pageNumber: number | null, page: IComicPage | null}>>([]);
    const {arc, page} = useStory();
    const rootArc = useSetting("defaultStoryArc");
    const navigate = useNavigate();

    useEffect(() => {
        services().character.pages(characterId).then(setPageIds);
    }, [characterId]);

    useEffect(() => {
        setPages(pageIds
            .filter(pageId => arc.root(page.getById(pageId)?.arcId)?.id === arc.getById(rootArc)?.id)
            .map(pageId => ({
                pageNumber: page.pageNumber(pageId),
                page: page.getById(pageId),
            }))
            .sort((a, b) => (a.pageNumber || 0) - (b.pageNumber || 0))
        );
    }, [pageIds, page, rootArc])

    const goToPage = (url: string) => {
        if (url) {
            navigate(`/comic/page/${url}/`);
        }
    };

    return {pages, goToPage};
});

const connect = inject<ICharacterAppearancesInputProps, CharacterAppearancesProps>(mergeProps(
    injectCharacterAppearancesProps,
));
export const connectCharacterAppearances = connect;

export const CharacterAppearances = overridable<ICharacterAppearancesInputProps>(connect(CharacterAppearancesComponent));
