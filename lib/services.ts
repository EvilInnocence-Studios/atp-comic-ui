import { IMethods } from "@core/lib/types";
import { arcServices } from "./lib/arc/services";
import { pageServices } from "./lib/page/services";
import { characterServices } from "./lib/character/services";

export const comicServices = (methods:IMethods) => ({
    ...arcServices(methods),
    ...pageServices(methods),
    ...characterServices(methods),
});
