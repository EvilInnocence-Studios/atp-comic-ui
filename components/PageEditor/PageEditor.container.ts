import { IComicPage } from "@comic-shared/page/types";
import { services } from "@core/lib/api";
import { overridable } from "@core/lib/overridable";
import { useUpdater } from "@core/lib/useUpdater";
import { createInjector, inject, mergeProps } from "unstateless";
import { PageEditorComponent } from "./PageEditor.component";
import { IPageEditorInputProps, IPageEditorProps, PageEditorProps } from "./PageEditor.d";

const injectPageEditorProps = createInjector(({arcId, pageId}:IPageEditorInputProps):IPageEditorProps => {
    const updater = useUpdater<IComicPage>(
        "page",
        pageId,
        {id: "", arcId, sortOrder: 0, postDate: null, enabled: false, name: "", url: "", imageUrl: "", transcript: ""},
        services().page.get,
        services().page.update,
        "manual",
    )
    
    return {page: updater.history.entity, ...updater};
});

const connect = inject<IPageEditorInputProps, PageEditorProps>(mergeProps(
    injectPageEditorProps,
));
export const connectPageEditor = connect;

export const PageEditor = overridable<IPageEditorInputProps>(connect(PageEditorComponent));
