import { ILayoutEditorProps, LayoutEditor } from "@theming/lib/layout/componentRegistry";

import img from "./episode-images-placeholder.png";
import styles from "./EpisodeImages.module.scss";

export const EpisodeImagesLayoutEditor:LayoutEditor = ({css, className, classes = styles}:ILayoutEditorProps) => <>
    {css && <style>{css}</style>}
    <div className={className}>
        <div className={classes.listItem}>
            <img src={img} />
        </div>
    </div>
</>;
