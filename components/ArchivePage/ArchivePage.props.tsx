import { IArchivePageInputProps } from "./ArchivePage.d";

export const ArchivePagePropEditor = (
    {}: IArchivePageInputProps,
    updateProps: (props: any) => void,
    updateProp: (prop: string) => (value: any) => void
) => {
    return (
        <div>
            Placeholder Prop Editor for ArchivePage
        </div>
    );
}
