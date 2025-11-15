import { Spin } from "antd";
import {CharacterImageProps} from "./CharacterImage.d";
import styles from './CharacterImage.module.scss';
import clsx from "clsx";
import { overridable } from "@core/lib/overridable";

export const CharacterImageComponent = overridable(({image, isLoading, imgHost}:CharacterImageProps) => <Spin spinning={isLoading}>
    <img
        src={image && imgHost
            ? `${imgHost}${image.url}`
            : '/logo.png'
        }
        alt={image?.caption || 'Character Image'}
        className={clsx([styles.image, isLoading && styles.isLoading])}
    />
</Spin>
);
