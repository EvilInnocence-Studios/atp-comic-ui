import { IS3ImageInputProps } from "@core/components/S3Image/S3Image";

export declare interface IComicImageProps {

}

// What gets passed into the component from the parent as attributes
export declare interface IComicImageInputProps extends Omit<IS3ImageInputProps, "folderSetting"> {

}

export type ComicImageProps = IComicImageInputProps & IComicImageProps;