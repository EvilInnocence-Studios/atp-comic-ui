import { useStory } from "@comic/lib/useStory";
import { useSetting } from "@common/lib/setting/services";
import { overridable } from "@core/lib/overridable";
import { prop, sort } from "ts-functional";
import { createInjector, inject, mergeProps } from "unstateless";
import { CharactersPageComponent } from "./CharactersPage.component";
import { CharactersPageProps, ICharactersPageInputProps, ICharactersPageProps } from "./CharactersPage.d";

const injectCharactersPageProps = createInjector(({}:ICharactersPageInputProps):ICharactersPageProps => {
    const story = useStory();
    
    const mode = useSetting("comic.CharacterPageDisplayMode");

    return {
        characters: story.character.list().filter(prop("enabled")).sort(sort.by(prop<any, any>("sortOrder")).asc),
        mode,
    };
});

const connect = inject<ICharactersPageInputProps, CharactersPageProps>(mergeProps(
    injectCharactersPageProps,
));
export const connectCharactersPage = connect;

export const CharactersPage = overridable<ICharactersPageInputProps>(connect(CharactersPageComponent));
