import { IMethods } from "@core/lib/types";
import { arcServices } from "./arc/services";
import { characterServices } from "./character/services";
import { pageServices } from "./page/services";

export const comicServices = (methods: IMethods) => ({
    ...arcServices(methods),
    ...pageServices(methods),
    ...characterServices(methods),
});
