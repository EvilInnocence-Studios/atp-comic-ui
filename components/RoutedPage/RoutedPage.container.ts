import { overridable } from "@core/lib/overridable";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import { useParams } from "react-router-dom";
import { createInjector, inject, mergeProps } from "unstateless";
import icon from './icon.svg';
import { RoutedPageComponent } from "./RoutedPage.component";
import { IRoutedPageInputProps, IRoutedPageProps, RoutedPageProps } from "./RoutedPage.d";

const injectRoutedPageProps = createInjector(({}:IRoutedPageInputProps):IRoutedPageProps => {
    const {url} = useParams();
    
    return {url: url || ""};
});

const connect = inject<IRoutedPageInputProps, RoutedPageProps>(mergeProps(
    injectRoutedPageProps,
));
export const connectRoutedPage = connect;

export const RoutedPage = withLayoutMetadata(
    overridable<IRoutedPageInputProps>(connect(RoutedPageComponent)),
    {
        name: "RoutedPage",
        displayName: "Comic Page",
        category: "Comic",
        description: "",
        icon,
    }
);
