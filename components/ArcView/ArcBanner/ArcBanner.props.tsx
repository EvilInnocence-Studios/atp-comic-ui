import { IArcBannerInputProps } from "./ArcBanner.d";

export const ArcBannerPropEditor = (
    {}: IArcBannerInputProps,
    updateProps: (props: any) => void,
    updateProp: (prop: string) => (value: any) => void
) => {
    return (
        <div>
            Placeholder Prop Editor for ArcBanner
        </div>
    );
}
