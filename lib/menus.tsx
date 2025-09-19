import { faBook, faImage, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ItemType, MenuItemType } from "antd/es/menu/interface";
import { Index } from "ts-functional/dist/types";

export const comicMenus:Index<ItemType<MenuItemType>[]> = {
    admin: [{
        key: "comic",
        label: "Comic",
        icon: <FontAwesomeIcon icon={faBook} />,
        children: [{
            key: "comic/arc",
            label: "Pages",
            icon: <FontAwesomeIcon icon={faImage} />,
        }, {
            key: "comic/character",
            label: "Characters",
            icon: <FontAwesomeIcon icon={faUsers} />,
        }]
    }],
    public: [],
}
