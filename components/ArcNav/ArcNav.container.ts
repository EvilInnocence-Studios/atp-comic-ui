import { useStory } from "@comic/lib/useStory";
import { useSetting } from "@common/lib/setting/services";
import { overridable } from "@core/lib/overridable";
import { createInjector, inject, mergeProps } from "unstateless";
import { ArcNavComponent } from "./ArcNav.component";
import { IArcNavInputProps, IArcNavProps, ArcNavProps } from "./ArcNav.d";

const injectArcNavProps = createInjector(({arc}:IArcNavInputProps):IArcNavProps => {
    const story = useStory();
    const linkType = useSetting("comic.navLinkStyle");
    
    const nextArc = story.arc.next(arc.id);
    const prevArc = story.arc.prev(arc.id);
    const firstArc = story.arc.first(arc.id);
    const latestArc = story.arc.latest(arc.id);

    return {nextArc, prevArc, firstArc, latestArc, linkType};
});

const connect = inject<IArcNavInputProps, ArcNavProps>(mergeProps(
    injectArcNavProps,
));
export const connectArcNav = connect;

export const ArcNav = overridable<IArcNavInputProps>(connect(ArcNavComponent));
