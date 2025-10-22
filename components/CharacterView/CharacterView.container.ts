import { createInjector, inject, mergeProps } from "unstateless";
import {CharacterViewComponent} from "./CharacterView.component";
import {ICharacterViewInputProps, CharacterViewProps, ICharacterViewProps} from "./CharacterView.d";
import { ICharacterAttribute } from "@comic-shared/character/types";
import { useEffect, useState } from "react";
import { services } from "@core/lib/api";
import { IComicPage } from "@comic-shared/page/types";
import { useStory } from "@comic/lib/useStory";
import { useSetting } from "@common/lib/setting/services";

const injectCharacterViewProps = createInjector(({character}:ICharacterViewInputProps):ICharacterViewProps => {
    const [attributes, setAttributes] = useState<ICharacterAttribute[]>([]);
    const [pages, setPages] = useState<Array<{pageNumber: number | null, page: IComicPage | null}>>([]);
    const {arc, page} = useStory();
    const rootArc = useSetting("defaultStoryArc");

    useEffect(() => {
        services().character.attribute.search(character.id).then(setAttributes);
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
console.log(pages);    
    return {attributes, pages};
});

const connect = inject<ICharacterViewInputProps, CharacterViewProps>(mergeProps(
    injectCharacterViewProps,
));

export const CharacterView = connect(CharacterViewComponent);
