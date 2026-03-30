import { useStory } from "@comic/lib/useStory";
import { useSetting } from "@common/lib/setting/services";
import { overridable } from "@core/lib/overridable";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import { createInjector, inject, mergeProps } from "unstateless";
import { IArcContextProps, injectArcContextProps } from "@comic/lib/context";
import { ArcNavComponent } from "./ArcNav.component";
import { ArcNavProps, IArcNavInputProps, IArcNavProps } from "./ArcNav.d";
import { ArcNavLayoutEditor } from "./ArcNav.layout";
import { ArcNavPropEditor } from "./ArcNav.props";
import icon from './icon.svg';

const injectArcNavProps = createInjector(({arc}:IArcNavInputProps & IArcContextProps):IArcNavProps => {
    const story = useStory();
    
    const nextArc = story.arc.next(arc?.id || "");
    const prevArc = story.arc.prev(arc?.id || "");
    const firstArc = story.arc.first(arc?.id || "");
    const latestArc = story.arc.latest(arc?.id || "");

    const archiveLinkLevel = useSetting("comic.ArchiveLinkLevel");
    const parents = [...story.arc.parents(arc?.id), arc].filter(a => a !== null);
    const archiveArc = archiveLinkLevel === ""
        ? arc
        : parents[parseInt(archiveLinkLevel, 10)];    


    return {nextArc, prevArc, firstArc, latestArc, archiveArc};
});

const connect = inject<IArcNavInputProps, ArcNavProps>(mergeProps(
    injectArcContextProps,
    injectArcNavProps,
));
export const connectArcNav = connect;

export const ArcNav = withLayoutMetadata(
    overridable<IArcNavInputProps>(connect(ArcNavComponent)),
    {
        name: "ArcNav",
        displayName: "Arc Nav",
        category: "Comic",
        subCategory: "Arc",
        description: "",
        icon,
        getSlotDisplayName: (slotName, props) => props[slotName] || slotName,
        layoutEditor: ArcNavLayoutEditor,
        propEditor: ArcNavPropEditor,
    }
);
