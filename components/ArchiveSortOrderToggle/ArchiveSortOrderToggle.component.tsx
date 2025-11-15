import { faArrowDown19, faArrowUp91 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArchiveSortOrderToggleProps } from "./ArchiveSortOrderToggle.d";
import { overridable } from "@core/lib/overridable";

export const ArchiveSortOrderToggleComponent = overridable(({archive:{sortOrder, setSortOrder}}:ArchiveSortOrderToggleProps) =>
    <FontAwesomeIcon
        icon={sortOrder === "asc" ? faArrowDown19 : faArrowUp91}
        onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
    />
);
