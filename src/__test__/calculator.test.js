import {sum} from "./calculator";

test('基本的な加算式', () => {
  expect(sum(1, 2)).toBe(3);
});

test("100と2を足す", () => {
  expect(sum(100, 2)).toBe(102);
});

test("4と4を足す足し算", () => {
  expect(sum(4, 4)).toBe(8);
});

test("4と4を足す足し算　不正解", () => {
  expect(sum(4, 4)).not.toBe(9);
});

test("6と6を足す足し算", () => {
  expect(sum(6, 6)).toBe(12);
});

test("3つの値を足す式", () => {
  expect(sum(6,6,6)).toBe(18);
});

test("4つの値を足す式", () => {
  expect(sum(6, 6, 6, 6)).toBe(24);
});

