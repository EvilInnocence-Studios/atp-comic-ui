import { IPageTranscriptInputProps } from "./PageTranscript.d";

export const PageTranscriptPropEditor = (
    {}: IPageTranscriptInputProps,
    updateProps: (props: any) => void,
    updateProp: (prop: string) => (value: any) => void
) => {
    return (
        <div>
            Placeholder Prop Editor for PageTranscript
        </div>
    );
}
