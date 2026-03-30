import { IComicArc } from "@comic-shared/arc/types";
import { IComicCharacter } from "@comic-shared/character/types";
import { IComicPage } from "@comic-shared/page/types";
import { useStory } from "@comic/lib/useStory";
import { createContext, useContext } from "react";
import { createInjector } from "unstateless";

export const ComicArcUrlContext = createContext<string>("");

export declare interface IArcContextProps {
    arc: IComicArc | null;
}

export const injectArcContextProps = createInjector(({url}:{url?:string}):IArcContextProps => {
    const defaultUrl = useContext(ComicArcUrlContext);
    const story = useStory();
    const arc = story.arc.get(url || defaultUrl);
    
    return {arc};
});

export const ComicPageUrlContext = createContext<string>("");

export declare interface IPageContextProps {
    page: IComicPage | null;
}

export const injectPageContextProps = createInjector(({url}:{url?:string}):IPageContextProps => {
    const defaultUrl = useContext(ComicPageUrlContext);
    const story = useStory();
    const page = story.page.get(url || defaultUrl);
    
    return {page};
});

export declare interface ICharacterContextProps {
    character: IComicCharacter | null;
}

export const ComicCharacterIdContext = createContext<string>("");

export const injectCharacterContextProps = createInjector(({id}:{id?:string | null}):ICharacterContextProps => {
    const story = useStory();
    const character = story.character.get(id);
    
    return {character};
});