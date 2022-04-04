
import { isNumber } from "./helpers";
import { mathOperators } from "./mathOperators";

export type ParsedLineType = Array<number | string>;

export const parser = (line: string): ParsedLineType | null => {
    const result = [];
    const stack = line.split(" ");
    const custOpers = ['**', '!'];

    for (let key = 0; key < stack.length; key++) {
        const prevItem = stack[key - 1];
        const item = stack[key];
        //console.log('prev ' + prevItem + ' item: '+item);

        const isValidNumberPush = !isNumber(prevItem) && isNumber(item);
        //мои изменения
        const isValidOperatorPush =
            (isNumber(prevItem) || prevItem === '**') ||   
            (!isNumber(prevItem) && custOpers.some(p => prevItem === p)) ||
            !isNumber(item) &&
            mathOperators.hasOwnProperty(item);

        if (isValidNumberPush) {
            result.push(Number(item));
        } else if (isValidOperatorPush) {
            result.push(item);
        } else {
            throw new TypeError("Unexpected string");
        }
    }
    //console.log(result);
    return result;
};