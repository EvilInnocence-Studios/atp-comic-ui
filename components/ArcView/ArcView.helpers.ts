import { IComicArc } from "@comic-shared/arc/types";
import { ComicArcUrlContext } from "@comic/lib/context";
import { useStory } from "@comic/lib/useStory";
import { useContext } from "react";
import { createInjector } from "unstateless";

export declare interface IArcContextProps {
    arc: IComicArc | null;
}

export const injectArcContextProps = createInjector(({url}:{url?:string}):IArcContextProps => {
    const defaultUrl = useContext(ComicArcUrlContext);
    const story = useStory();
    const arc = story.arc.get(url || defaultUrl);
    
    return {arc};
});