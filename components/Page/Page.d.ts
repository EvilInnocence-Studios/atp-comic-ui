export declare interface IPageProps {

}

// What gets passed into the component from the parent as attributes
export declare interface IPageInputProps {
    url: string;
    classes?: any;
}

export type PageProps = IPageInputProps & IPageProps;