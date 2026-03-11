import { ComicPageUrlContext } from "@comic/lib/context";
import { useStory } from "@comic/lib/useStory";
import { overridable } from "@core/lib/overridable";
import { useToggle } from "@core/lib/useToggle";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import { useContext } from "react";
import { createInjector, inject, mergeProps } from "unstateless";
import icon from './icon.svg';
import { PageTranscriptComponent } from "./PageTranscript.component";
import { IPageTranscriptInputProps, IPageTranscriptProps, PageTranscriptProps } from "./PageTranscript.d";
import { PageTranscriptLayoutEditor } from "./PageTranscript.layout";
import { PageTranscriptPropEditor } from "./PageTranscript.props";

const injectPageTranscriptProps = createInjector(({url}:IPageTranscriptInputProps):IPageTranscriptProps => {
    const story = useStory();
    const pageUrl = useContext(ComicPageUrlContext);
    const page = story.page.get(url || pageUrl);
    const transcript = useToggle(false);
    
    return {page, transcript};
});

const connect = inject<IPageTranscriptInputProps, PageTranscriptProps>(mergeProps(
    injectPageTranscriptProps,
));
export const connectPageTranscript = connect;

export const PageTranscript = withLayoutMetadata(
    overridable<IPageTranscriptInputProps>(connect(PageTranscriptComponent)),
    {
        name: "PageTranscript",
        displayName: "Page Transcript",
        category: "Comic",
        description: "",
        icon,
        getSlotDisplayName: (slotName, props) => props[slotName] || slotName,
        propEditor: PageTranscriptPropEditor,
        layoutEditor: PageTranscriptLayoutEditor,
    }
);
