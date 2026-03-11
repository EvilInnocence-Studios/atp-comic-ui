import { ILayoutEditorProps, LayoutEditor } from "@theming/lib/layout/componentRegistry";
import { PageTranscriptComponent } from "./PageTranscript.component";
import { PageTranscriptProps } from "./PageTranscript";

export const PageTranscriptLayoutEditor:LayoutEditor = ({
    __layoutId, __update, __isSelected,
    ...props
}:ILayoutEditorProps) => <PageTranscriptComponent
    {...props as PageTranscriptProps}
    page={{
        ...props.page,
        transcript: "Page transcript goes here."
    }}
    transcript={{
        isset: true,
        toggle: () => {},
        on: () => {},
        off: () => {},
    }}
/>;
