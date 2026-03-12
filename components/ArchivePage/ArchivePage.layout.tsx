import { useState } from "react";
import { ArchivePageComponent } from "./ArchivePage.component";
import { connectArchivePage } from "./ArchivePage.container";
import { ILayoutEditorProps, LayoutEditor } from "@theming/lib/layout/componentRegistry";

export const ArchivePageLayoutEditor:LayoutEditor = ({__layoutId, __update, __isSelected, ...props}:ILayoutEditorProps) => {
    const [node, setNode] = useState<HTMLElement | null>(null);
    const ArchivePageOrig = connectArchivePage(ArchivePageComponent);

    return (
        <div ref={setNode} style={{position: 'relative'}}>
             <ArchivePageOrig {...props} />
            {__isSelected && (
                <div style={{
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    width: '100%', 
                    height: '100%', 
                    border: '2px solid blue',
                    pointerEvents: 'none',
                    zIndex: 10
                }}>
                    <span style={{background: 'blue', color: 'white', fontSize: '10px', padding: '2px'}}>Editor Active</span>
                </div>
            )}
        </div>
    );
};
