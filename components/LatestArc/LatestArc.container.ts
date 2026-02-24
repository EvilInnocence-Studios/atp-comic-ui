import { createInjector, inject, mergeProps } from "unstateless";
import {LatestArcComponent} from "./LatestArc.component";
import {ILatestArcInputProps, LatestArcProps, ILatestArcProps} from "./LatestArc.d";
import { overridable } from "@core/lib/overridable";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import icon from './icon.svg';
import { LatestArcPropEditor } from "./LatestArc.props";
import { useSetting } from "@common/lib/setting/services";
import { useStory } from "@comic/lib/useStory";

const injectLatestArcProps = createInjector(({arcId}:ILatestArcInputProps):ILatestArcProps => {
    const defaultArc = useSetting("defaultStoryArc");
    const story = useStory();

    const currentArcId = arcId || defaultArc;
    const latestArc = story.arc.latest(currentArcId);
    
    return {latestArcUrl: latestArc?.url || undefined};
});

const connect = inject<ILatestArcInputProps, LatestArcProps>(mergeProps(
    injectLatestArcProps,
));
export const connectLatestArc = connect;

export const LatestArc = withLayoutMetadata(
    overridable<ILatestArcInputProps>(connect(LatestArcComponent)),
    {
        name: "LatestArc",
        displayName: "Latest Arc",
        category: "Comic",
        description: "Latest Arc",
        icon,
        getSlotDisplayName: (slotName, props) => props[slotName] || slotName,
        propEditor: LatestArcPropEditor,
    }
);
