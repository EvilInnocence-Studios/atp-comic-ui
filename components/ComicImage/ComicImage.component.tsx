import { S3Image } from "@core/components/S3Image";
import { ComicImageProps } from "./ComicImage.d";

export const ComicImageComponent = (props:ComicImageProps) =>
    <S3Image {...props} folderSetting="comicMediaFolder" />;
