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
        Pages: {
            "theme.comicPageWidth": {
                displayName: "Comic Page Width",
                type: "string",
                defaultValue: "100%",
                description: "The width of comic pages as displayed on the site."
            },
        },
        Arcs: {
            "comic.arcNames": {
                displayName: "Arc Names",
                type: "string",
                defaultValue: "Arc",
                description: "Comma-separated names for the levels of story arcs."
            },
        },
        Archives: {
            "comic.showArchiveDetails": {
                displayName: "Show Archive Details",
                type: "boolean",
                defaultValue: true,
                description: "Show details section in the comic archive."
            },
            "comic.showArchiveBanner": {
                displayName: "Show Archive Banner",
                type: "boolean",
                defaultValue: true,
                description: "Show banner image in the comic archive."
            },
            "comic.showArchiveViewModeToggle": {
                displayName: "Show View Mode Toggle",
                type: "boolean",
                defaultValue: true,
                description: "Show a toggle to switch between list and grid views in the comic archive."
            },
            "comic.archiveBreadCrumbMode": {
                displayName: "Breadcrumb Mode",
                type: "select",
                defaultValue: "full",
                description: "The mode for displaying breadcrumbs on comic pages.",
                options: () => Promise.resolve([
                    { value: 'none', label: 'None' },
                    { value: 'parent', label: 'Parent Only' },
                    { value: 'full', label: 'Full' },
                ]),
            },
            "theme.comicArcDetailsWidth": {
                displayName: "Archive Details Width",
                type: "string",
                defaultValue: "600px",
                description: "The width of the details section in the archives."
            },
            "comic.defaultArchiveView": {
                displayName: "Default Archive View",
                type: "select",
                defaultValue: "list",
                description: "The default view for the comic archive.",
                options: () => Promise.resolve([
                    { value: 'list', label: 'List' },
                    { value: 'grid', label: 'Grid' },
                ]),
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
