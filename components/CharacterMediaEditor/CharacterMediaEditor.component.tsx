import { ICharacterMedia, IComicCharacter } from "@comic-shared/character/types";
import { DeleteBtn } from "@core/components/DeleteBtn";
import { SortableList } from "@core/components/SortableList";
import { handle } from "@core/lib/onInputChange";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Space, Spin, Upload } from "antd";
import { prop, sort } from "ts-functional";
import { CharacterImage } from "../CharacterImage";
import { CharacterMediaEditorProps } from "./CharacterMediaEditor.d";
import styles from './CharacterMediaEditor.module.scss';
import { overridable } from "@core/lib/overridable";

interface IItemProps {
    item: ICharacterMedia,
    character: IComicCharacter;
    updateThumbnail: (id: string) => void;
    updateMainImage: (id: string) => void;
    remove: (id: string) => () => void;
    classes?: any;
}

export const ImageItem = overridable(({ item: m, character, updateThumbnail, updateMainImage, remove, classes = styles }: IItemProps) => <div className={classes.mediaItem}>
    <CharacterImage characterId={character.id} imageId={m.id} /><br />
    <Space.Compact>
        <Button
            type={m.id === character.thumbnailId ? "primary" : "default"}
            onClick={handle(updateThumbnail)(m.id)}
        >
            Thumbnail
        </Button>
        <Button
            type={m.id === character.mainImageId ? "primary" : "default"}
            onClick={handle(updateMainImage)(m.id)}
        >
            Main Image
        </Button>
    </Space.Compact>
    <DeleteBtn entityType="image" onClick={remove(m.id)} />
</div>);

export const CharacterMediaEditorComponent = overridable(({
    character, media, upload, isLoading,
    updateThumbnail, updateMainImage, remove, sort: sortMedia,
    classes = styles
}: CharacterMediaEditorProps) =>
    <Spin spinning={isLoading}>
        {!!character && <>
            <div className={classes.characterMediaList}>
                <SortableList
                    items={media.sort(sort.by(prop<any, any>("order")).asc)}
                    direction="horizontal"
                    getId={prop("id")}
                    getListId={(image, index) => `${image.id}:${index}`}
                    sort={sortMedia}
                    ItemComponent={ImageItem}
                    itemProps={{ character, updateThumbnail, updateMainImage, remove, classes }}
                />
            </div>
            <Upload.Dragger
                customRequest={({ file }) => upload(file as File)}
                showUploadList={false}
            >
                <FontAwesomeIcon icon={faUpload} size="3x" /><br />
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
            </Upload.Dragger>
        </>}
    </Spin>
);
