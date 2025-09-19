import { IMethods } from "@core/lib/types";
import { arcServices } from "./lib/arc/services";

export const comicServices = (methods:IMethods) => ({
    ...arcServices(methods),
});
