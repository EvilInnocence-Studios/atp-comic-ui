import { createInjector, inject, mergeProps } from "unstateless";
import {LatestPageComponent} from "./LatestPage.component";
import {ILatestPageInputProps, LatestPageProps, ILatestPageProps} from "./LatestPage.d";
import { useSetting } from "@common/lib/setting/services";
import { useStory } from "@comic/lib/useStory";

const injectLatestPageProps = createInjector(({arcId}:ILatestPageInputProps):ILatestPageProps => {
    const defaultArc = useSetting("defaultStoryArc");
    const story = useStory();

    const currentArc = arcId || defaultArc;
    const pageUrl = story.arc.latestPage(currentArc)?.url || null;

    return {pageUrl};
});

const connect = inject<ILatestPageInputProps, LatestPageProps>(mergeProps(
    injectLatestPageProps,
));

export const LatestPage = connect(LatestPageComponent);
