export type ScalarOperationType = (first: number, second: number) => number;

export const mul: ScalarOperationType = (
    first: number,
    second: number
): number => first * second;

export const div: ScalarOperationType = (
    first: number,
    second: number
): number => first / second;

export const add: ScalarOperationType = (
    first: number,
    second: number
): number => first + second;

export const minus: ScalarOperationType = (
    first: number,
    second: number
): number => first - second;

//мои изменения
export const square: ScalarOperationType = (
    first: number,
    second: number
): number => first * first;
//мои изменения
export const pow: ScalarOperationType = (
    first: number,
    second: number
): number => Math.pow(first, second);
//мои изменения
export const fact: ScalarOperationType = (
    first: number,
    second: number
): number => {
    let res=1;
    //console.log('first: ' + first)
    for(let i=1; i<=first;i++)
      res *= i;
    return res;
}

export const mathOperators: { [key: string]: ScalarOperationType } = {
    "*": mul,
    "/": div,
    "+": add,
    "-": minus,
    "**": square,
    "^": pow,
    "!": fact
};

export const mathPriorities: { [key: string]: number } = {
    FIRST: 1,
    SECOND: 2,
};

const { FIRST, SECOND } = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
    "*": FIRST,
    "/": FIRST,
    "^": FIRST,
    "**": FIRST,
    "!": FIRST,
    "+": SECOND,
    "-": SECOND,
};
