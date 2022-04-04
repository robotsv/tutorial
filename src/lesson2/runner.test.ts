import { runner } from "./runner";
//import { jest } from '@jest/globals';

test("runner: 1 * 32", () => {
    expect(runner("1 * 32")).toEqual(32);
});

test("runner: 2 * 32", () => {
    expect(runner("2 * 32")).toEqual(64);
});

test("runner: 2 * 2 * 3", () => {
    expect(runner("2 * 2 * 3")).toEqual(12);
});

test("runner: 2 * 2 + 3", () => {
    expect(runner("2 * 2 + 3")).toEqual(7);
});

test("runner: 2 + 2 * 3", () => {
    expect(runner("2 + 2 * 3")).toEqual(8);
});

test("runner: 20 + 1 * 10 - 5 * 3", () => {
    expect(runner("20 + 1 * 10 - 5 * 3")).toEqual(15);
});

test("runner: 20 - 10 * 10 / 5 - 3", () => {
    expect(runner("20 - 10 * 10 / 5 - 3")).toEqual(-3);
});

//Мои дополнения
test("runner: 2 + 3 ** + 4", () => {
    expect(runner("2 + 3 ** + 4")).toEqual(15);
});

test("runner: 2 + 3 ^ 2 + 4", () => {
    expect(runner("2 + 3 ^ 2 + 4")).toEqual(15);
});

test("runner: 1 + 3 ! + 4", () => {
    expect(runner("1 + 3 ! + 4")).toEqual(11);
});