import { createInjector, inject, mergeProps } from "unstateless";
import {CharacterViewComponent} from "./CharacterView.component";
import {ICharacterViewInputProps, CharacterViewProps, ICharacterViewProps} from "./CharacterView.d";
import { ICharacterAttribute, ICharacterMedia } from "@comic-shared/character/types";
import { useEffect, useState } from "react";
import { services } from "@core/lib/api";
import { IComicPage } from "@comic-shared/page/types";
import { useStory } from "@comic/lib/useStory";
import { useSetting } from "@common/lib/setting/services";
import { useNavigate } from "react-router";

const injectCharacterViewProps = createInjector(({character}:ICharacterViewInputProps):ICharacterViewProps => {
    const [attributes, setAttributes] = useState<ICharacterAttribute[]>([]);
    const [media, setMedia] = useState<ICharacterMedia[]>([]);
    const [pages, setPages] = useState<Array<{pageNumber: number | null, page: IComicPage | null}>>([]);
    const {arc, page} = useStory();
    const rootArc = useSetting("defaultStoryArc");
    const navigate = useNavigate();

    useEffect(() => {
        services().character.attribute.search(character.id).then(atts => {
            setAttributes(atts.sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0)));
        });
        services().character.media.search(character.id).then(mediaItems => {
            setMedia(mediaItems.sort((a, b) => (a.order || 0) - (b.order || 0)));
        });
        services().character.pages(character.id).then(pageIds => {
            setPages(pageIds
                .filter(pageId => arc.root(page.getById(pageId)?.arcId)?.id === arc.getById(rootArc)?.id)
                .map(pageId => ({
                    pageNumber: page.pageNumber(pageId),
                    page: page.getById(pageId),
                }))
                .sort((a, b) => (a.pageNumber || 0) - (b.pageNumber || 0))
            );
        });
    }, [character.id, page.isLoaded, rootArc])

    const goToPage = (url: string) => {
        if (url) {
            navigate(`/comic/page/${url}/`);
        }
    };

    return {attributes, media, pages, goToPage};
});

const connect = inject<ICharacterViewInputProps, CharacterViewProps>(mergeProps(
    injectCharacterViewProps,
));

export const CharacterView = connect(CharacterViewComponent);
