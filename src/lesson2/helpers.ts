
export const isNumber = (item: string): boolean => !isNaN(Number(item));
export const isString = (item: any): boolean => item != undefined && (typeof item === "string" || item instanceof String);