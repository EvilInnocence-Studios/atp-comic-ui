import { createInjector, inject, mergeProps } from "unstateless";
import {ArcViewComponent} from "./ArcView.component";
import {IArcViewInputProps, ArcViewProps, IArcViewProps} from "./ArcView.d";

const injectArcViewProps = createInjector(({}:IArcViewInputProps):IArcViewProps => {
    return {};
});

const connect = inject<IArcViewInputProps, ArcViewProps>(mergeProps(
    injectArcViewProps,
));

export const ArcView = connect(ArcViewComponent);
