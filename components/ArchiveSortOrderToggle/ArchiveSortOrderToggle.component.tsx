import { faArrowDown19, faArrowUp91 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArchiveSortOrderToggleProps } from "./ArchiveSortOrderToggle.d";

export const ArchiveSortOrderToggleComponent = ({archive:{sortOrder, setSortOrder}}:ArchiveSortOrderToggleProps) =>
    <FontAwesomeIcon
        icon={sortOrder === "asc" ? faArrowDown19 : faArrowUp91}
        onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
    />;
