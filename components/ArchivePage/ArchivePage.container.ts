import { createInjector, inject, mergeProps } from "unstateless";
import {ArchivePageComponent} from "./ArchivePage.component";
import {IArchivePageInputProps, ArchivePageProps, IArchivePageProps} from "./ArchivePage.d";
import { overridable } from "@core/lib/overridable";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import icon from './icon.svg';
import { ArchivePageLayoutEditor } from "./ArchivePage.layout";
import { ArchivePagePropEditor } from "./ArchivePage.props";

const injectArchivePageProps = createInjector(({}:IArchivePageInputProps):IArchivePageProps => {
    return {};
});

const connect = inject<IArchivePageInputProps, ArchivePageProps>(mergeProps(
    injectArchivePageProps,
));
export const connectArchivePage = connect;

export const ArchivePage = withLayoutMetadata(
    overridable<IArchivePageInputProps>(connect(ArchivePageComponent)),
    {
        name: "ArchivePage",
        displayName: "ArchivePage",
        category: "",
        description: "",
        icon,
        getSlotDisplayName: (slotName, props) => props[slotName] || slotName,
        layoutEditor: ArchivePageLayoutEditor,
        propEditor: ArchivePagePropEditor,
    }
);
