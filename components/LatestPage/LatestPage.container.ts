import { useStory } from "@comic/lib/useStory";
import { useSetting } from "@common/lib/setting/services";
import { overridable } from "@core/lib/overridable";
import { createInjector, inject, mergeProps } from "unstateless";
import { LatestPageComponent } from "./LatestPage.component";
import { ILatestPageInputProps, ILatestPageProps, LatestPageProps } from "./LatestPage.d";

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
export const connectLatestPage = connect;

export const LatestPage = overridable<ILatestPageInputProps>(connect(LatestPageComponent));
