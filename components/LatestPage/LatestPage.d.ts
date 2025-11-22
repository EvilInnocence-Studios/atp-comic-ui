export declare interface ILatestPageProps {
    pageUrl: string | null;
}

// What gets passed into the component from the parent as attributes
export declare interface ILatestPageInputProps {
    arcId?: string;
    classes?: any;
}

export type LatestPageProps = ILatestPageInputProps & ILatestPageProps;