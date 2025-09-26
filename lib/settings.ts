import { ISettingContainer } from "@common/lib/setting/types";
import { services } from "@core/lib/api";

export const comicSettings:ISettingContainer = {
    Comic: {
        General: {
            defaultStoryArc: {
                displayName: "Default Story Arc",
                type: "select",
                defaultValue: "",
                description: "The default story arc to display",
                options: () => services().arc.search().then(arcs => [
                    {value: '', label: 'None'},
                    ...arcs.filter(arc => !arc.parentId).map(arc => ({ value: arc.id, label: arc.name }))
                ])
            },
            comicMediaFolder: {
                displayName: "Comic Media Folder",
                type: "string",
                defaultValue: "media/comics",
                description: "Folder to store comic media files."
            },
        },
        Display: {
            comicArcName: {
                displayName: "Arc Names",
                type: "string",
                defaultValue: "Arc",
                description: "Comma-separated names for the levels of story arcs."
            },
        }
    },
    Layout: {
        Homepage: {
            "homepage.showLatestComicPage": {
                displayName: "Show Latest Comic Page",
                type: "boolean",
                defaultValue: true,
                description: "Show the latest comic page on the homepage."
            }
        }
    }
}
