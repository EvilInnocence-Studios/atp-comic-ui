import { ICharacterContextProps, injectCharacterContextProps } from "@comic/lib/context";
import { overridable } from "@core/lib/overridable";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import { createInjector, inject, mergeProps } from "unstateless";
import { CharacterAppearancesComponent } from "./CharacterAppearances.component";
import { CharacterAppearancesProps, ICharacterAppearancesInputProps, ICharacterAppearancesProps } from "./CharacterAppearances.d";
import { CharacterAppearancesLayoutEditor } from "./CharacterAppearances.layout";
import { CharacterAppearancesPropEditor } from "./CharacterAppearances.props";
import icon from './icon.svg';
import { useSetting } from "@common/lib/setting/services";
import { useStory } from "@comic/lib/useStory";
import { useEffect, useState } from "react";
import { IComicArc } from "@comic-shared/arc/types";
import { useNavigate } from "react-router";
import { IComicPage } from "@comic-shared/page/types";

const injectCharacterAppearancesProps = createInjector(({character, rootArc:inputRootArc}:ICharacterAppearancesInputProps & ICharacterContextProps):ICharacterAppearancesProps => {
    const { arc, page, character:storyCharacter } = useStory();
    const pageIds = storyCharacter.pages(character?.id || "");
    const arcIds = storyCharacter.arcs(character?.id || "");
    const [pages, setPages] = useState<Array<{ pageNumber: number | null, page: IComicPage | null }>>([]);
    const [arcs, setArcs] = useState<Array<{ arcNumber: number | null, typeName: string, arc: IComicArc | null }>>([]);
    const rootArc = inputRootArc || useSetting("defaultStoryArc");
    const navigate = useNavigate();

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
    injectCharacterContextProps,
    injectCharacterAppearancesProps,
));
export const connectCharacterAppearances = connect;

export const CharacterAppearances = withLayoutMetadata(
    overridable<ICharacterAppearancesInputProps>(connect(CharacterAppearancesComponent)),
    {
        name: "CharacterAppearances",
        displayName: "CharacterAppearances",
        category: "Comic",
        subCategory: "Character",
        description: "",
        icon,
        getSlotDisplayName: (slotName, props) => props[slotName] || slotName,
        layoutEditor: CharacterAppearancesLayoutEditor,
        propEditor: CharacterAppearancesPropEditor,
    }
);
