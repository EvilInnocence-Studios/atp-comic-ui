import { faList, faTableCellsLarge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Switch } from "antd";
import { ArchiveViewModeToggleProps } from "./ArchiveViewModeToggle.d";
import { overridable } from "@core/lib/overridable";

export const ArchiveViewModeToggleComponent = overridable(({archive:{mode, setMode}}:ArchiveViewModeToggleProps) =>
    <Switch
        checked={mode === "list"}
        checkedChildren={<><FontAwesomeIcon icon={faList} /> List View</>}
        unCheckedChildren={<><FontAwesomeIcon icon={faTableCellsLarge} /> Grid View</>}
        onChange={(checked) => {
            setMode(checked ? "list" : "grid");
        }}
        defaultChecked={mode === "list"}
    />
);
