import { useEffect, useState } from "react";
import { ILatestArcInputProps } from "./LatestArc.d";
import { IComicArc } from "@comic-shared/arc/types";
import { services } from "@core/lib/api";
import { Select } from "antd";

export const LatestArcPropEditor = (
    {arcId}: ILatestArcInputProps,
    _updateProps: (props: any) => void,
    updateProp: (prop: string) => (value: any) => void
) => {
    const [rootArcs, setRootArcs] = useState<IComicArc[]>([]);

    useEffect(() => {
        services().arc.search().then(allArcs => {
            setRootArcs(allArcs.filter(arc => arc.parentId === null));
        });
    }, []);
    
    return <>
        <h2>Root Arc</h2>
        <Select
            value={arcId}
            onChange={updateProp("arcId")}
            options={rootArcs.map(arc => ({
                value: arc.id,
                label: arc.name,
            }))}
        />
    </>;
}
