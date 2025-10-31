export declare interface IComicAdProps {

}

// What gets passed into the component from the parent as attributes
export declare interface IComicAdInputProps {
    code: string;
    width: number;
    height: number;
}

export type ComicAdProps = IComicAdInputProps & IComicAdProps;

export declare interface ISizedComicAdInputProps {
    code: string;
}

export type SizedComicAdProps = ISizedComicAdInputProps & IComicAdProps;