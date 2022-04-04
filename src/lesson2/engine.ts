
import { ParsedLineType } from "./parser";
import { isNumber, isString } from "./helpers";
import {
    mathOperators,
    mathPriorities,
    mathOperatorsPriorities,
} from "./mathOperators";

const { FIRST, SECOND } = mathPriorities;


export const firstPrioritiesCalc = (stack: ParsedLineType): ParsedLineType => {
    let result: ParsedLineType = [];

    for (let key = 0; key < stack.length; key++) {
        const prevItem = result[result.length - 2];
        const item = result[result.length - 1];
        const nextItem = stack[key];

       // console.log('prev: ' + prevItem + '  item: ' + item + '  next:' + nextItem + '  isnumber: ' + isNumber(String(item)) + ' oper: ' + mathOperatorsPriorities[item]);

        if (!isNumber(String(item)) && mathOperatorsPriorities[item] === FIRST) {
            result = [
                ...result.slice(0, -2),
                mathOperators[item](Number(prevItem), Number(nextItem)),
            ];
            //console.log(' 1_res: [' + result + ']')
        } else if (isNumber(String(item)) && isString(nextItem)) {
            //console.log(' 3_res_prev: [' + result + ']' + ' ;' + nextItem);
            if (String(nextItem) === '**' || String(nextItem) === '!') {
                result = [
                    ...result.slice(0, -1),
                    mathOperators[nextItem](Number(item), Number(item)),
                ];
            } else result.push(nextItem);

            //console.log(' 3_res: [' + result + ']')
        } else {
            result.push(nextItem);
            //console.log(' 2_res: [' + result + ']')
        }
    }

    return result;
};

export const secondPrioritiesCalc = (stack: ParsedLineType): number => {
    //console.log('------secondary-------')
    //console.log(stack);
    let result = 0;
    for (let key = 0; key < stack.length; key++) {
        if (key === 0) {
            result = Number(stack[key]);
        }

        const prevItem = result;
        const item = stack[key - 1];
        const nextItem = stack[key];

        //console.log('prev: ' + prevItem + '  item: ' + item + '  next:' + nextItem + '  isnumber: ' + isNumber(String(item)) + ' oper: ' + mathOperatorsPriorities[item]);

        if (!isNumber(String(item)) && mathOperatorsPriorities[item] === SECOND) {
            result = mathOperators[item](Number(prevItem), Number(nextItem));
        }
    }
    return result;
};