export declare interface ILatestPageProps {
    pageUrl: string | null;
}

// What gets passed into the component from the parent as attributes
export declare interface ILatestPageInputProps {
    arcId?: string;
}

export type LatestPageProps = ILatestPageInputProps & ILatestPageProps;