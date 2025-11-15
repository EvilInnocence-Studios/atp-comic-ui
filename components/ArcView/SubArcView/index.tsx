import { ISubArcViewInputProps } from "./SubArcView";
import { SubArcGrid, SubArcList } from "./SubArcView.container";

export { SubArcGrid, SubArcList } from "./SubArcView.container";

export const SubArcView = (props:ISubArcViewInputProps) => <>
    <SubArcGrid {...props} />
    <SubArcList {...props} />
</>;
