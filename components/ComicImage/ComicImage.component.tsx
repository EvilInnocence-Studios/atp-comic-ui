import { S3Image } from "@core/components/S3Image";
import { ComicImageProps } from "./ComicImage.d";
import { overridable } from "@core/lib/overridable";

export const ComicImageComponent = overridable((props:ComicImageProps) =>
    <S3Image {...props} folderSetting="comicMediaFolder" />
);
