import { createInjector, inject, mergeProps } from "unstateless";
import {PageComponent} from "./Page.component";
import {IPageInputProps, PageProps, IPageProps} from "./Page.d";
import { overridable } from "@core/lib/overridable";

const injectPageProps = createInjector(({}:IPageInputProps):IPageProps => {
    return {};
});

const connect = inject<IPageInputProps, PageProps>(mergeProps(
    injectPageProps,
));

export const Page = overridable<IPageInputProps>(connect(PageComponent));
