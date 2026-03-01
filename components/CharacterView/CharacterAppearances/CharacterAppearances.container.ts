import { IComicPage } from "@comic-shared/page/types";
import { useStory } from "@comic/lib/useStory";
import { useSetting } from "@common/lib/setting/services";
import { services } from "@core/lib/api";
import { overridable } from "@core/lib/overridable";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createInjector, inject, mergeProps } from "unstateless";
import { CharacterAppearancesComponent } from "./CharacterAppearances.component";
import { CharacterAppearancesProps, ICharacterAppearancesInputProps, ICharacterAppearancesProps } from "./CharacterAppearances.d";
import { IComicArc } from "@comic-shared/arc/types";

const injectCharacterAppearancesProps = createInjector(({ characterId }: ICharacterAppearancesInputProps): ICharacterAppearancesProps => {
    const [pageIds, setPageIds] = useState<string[]>([]);
    const [pages, setPages] = useState<Array<{ pageNumber: number | null, page: IComicPage | null }>>([]);
    const [arcIds, setArcIds] = useState<string[]>([]);
    const [arcs, setArcs] = useState<Array<{ arcNumber: number | null, typeName: string, arc: IComicArc | null }>>([]);
    const { arc, page } = useStory();
    const rootArc = useSetting("defaultStoryArc");
    const navigate = useNavigate();

    useEffect(() => {
        services().character.pages(characterId).then(setPageIds);
        services().character.arcs(characterId).then(setArcIds);
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
    }, [pageIds, page, rootArc]);

    useEffect(() => {
        setArcs(arcIds
            .filter(arcId => arc.root(arcId)?.id === arc.getById(rootArc)?.id)
            .map(arcId => ({
                arcNumber: arc.arcNumber(arcId),
                typeName: arc.typeName(arc.getById(arcId)),
                arc: arc.getById(arcId),
            }))
            .sort((a, b) => (a.arcNumber || 0) - (b.arcNumber || 0))
        );
    }, [arcIds, arc, rootArc]);
    console.log(arcs);
    const goToPage = (url: string) => {
        if (url) {
            navigate(`/comic/page/${url}`);
        }
    };

    const goToArc = (url: string) => {
        if (url) {
            navigate(`/comic/arc/${url}`);
        }
    };

    return { pages, goToPage, arcs, goToArc };
});

const connect = inject<ICharacterAppearancesInputProps, CharacterAppearancesProps>(mergeProps(
    injectCharacterAppearancesProps,
));
export const connectCharacterAppearances = connect;

export const CharacterAppearances = overridable<ICharacterAppearancesInputProps>(connect(CharacterAppearancesComponent));
