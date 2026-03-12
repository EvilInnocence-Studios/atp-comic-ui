import { ILayoutEditorProps, LayoutEditor } from "@theming/lib/layout/componentRegistry";

export const PageViewLayoutEditor:LayoutEditor = ({}:ILayoutEditorProps) => <div
    style={{
        width: "100%",
        aspectRatio: "16/9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2rem",
        fontWeight: "bold",
        fontStyle: "italic",
        color: "var(--textColor)",
        border: "5px solid var(--borderColor)",
    }}
    >
        Comic Page goes here.
    </div>;
