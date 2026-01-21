import { createInjector, inject, mergeProps } from "unstateless";
import {RoutedArchiveComponent} from "./RoutedArchive.component";
import {IRoutedArchiveInputProps, RoutedArchiveProps, IRoutedArchiveProps} from "./RoutedArchive.d";
import { overridable } from "@core/lib/overridable";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import icon from './icon.svg';
import { useParams } from "react-router-dom";

const injectRoutedArchiveProps = createInjector(({}:IRoutedArchiveInputProps):IRoutedArchiveProps => {
    const {url} = useParams();
    
    return {url: url || ""};
});

const connect = inject<IRoutedArchiveInputProps, RoutedArchiveProps>(mergeProps(
    injectRoutedArchiveProps,
));
export const connectRoutedArchive = connect;

export const RoutedArchive = withLayoutMetadata(
    overridable<IRoutedArchiveInputProps>(connect(RoutedArchiveComponent)),
    {
        name: "RoutedArchive",
        displayName: "RoutedArchive",
        category: "Comic",
        description: "",
        icon,
    }
);
