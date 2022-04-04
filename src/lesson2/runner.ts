
//import { parser } from "./parser";

import { firstPrioritiesCalc, secondPrioritiesCalc } from "./engine";
import { parser } from "./parser";

export const runner = (line: string): number => {
    const stack = parser(line);

    if (stack === null) {
        throw new TypeError("Unexpected string");
    }

    const firstPrioritiesRes = firstPrioritiesCalc(stack);

    if (firstPrioritiesRes.length === 1) {
        return Number(firstPrioritiesRes[0]);
    }

    return secondPrioritiesCalc(firstPrioritiesRes);
};