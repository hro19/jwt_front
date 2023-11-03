import { sum } from "./calculator";

test("基本的な加算式", () => {
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
  expect(sum(6, 6, 6)).toBe(18);
});

test("4つの値を足す式", () => {
  expect(sum(6, 6, 6, 6)).toBe(24);
});

test("引数5個で足し算計算", () => {
  expect(sum(7, 7, 7, 7, 7)).toBe(35);
});

const teamsMember = {
  name: "馬場",
  age: 33,
  position: "捕手",
};

test("オブジェクトのテストその1", () => {
  expect(teamsMember).toStrictEqual({
    name: "馬場",
    age: 33,
    position: "捕手",
  });
});

test("オブジェクトのテストその2", () => {
  expect(teamsMember).toMatchObject({
    name: "馬場",
    age: 33,
  });
});

const yakyumembers = ["馬場", "相島", "堤田"];

test("配列のテストその1", () => {
  expect(yakyumembers).toStrictEqual(["馬場", "相島", "堤田"]);
});

test("配列のテストその2", () => {
  expect(yakyumembers).not.toStrictEqual(["馬場", "相島"]);
});

test("配列のテストその3", () => {
  expect(yakyumembers).toEqual(expect.arrayContaining(["馬場", "相島"]));
});

const members = [
  {
    name: "馬場",
    age: 33,
    position: "捕手",
  },
  {
    name: "星野",
    age: 53,
    position: "投手",
  },
  {
    name: "木下",
    age: 29,
    position: "内野手",
  },
];

test("配列の中のオブジェクトのテストその1", () => {
  expect(yakyumembers).not.toStrictEqual([
    {
      name: "馬場",
      age: 33,
      position: "捕手",
    },
    {
      name: "星野",
      age: 53,
      position: "投手",
    },
    {
      name: "木下",
      age: 29,
      position: "内野手",
    },
  ]);
});

test("配列の中のオブジェクトのテストその2", () => {
  expect(members).toEqual(
    expect.arrayContaining([
      {
        name: "馬場",
        age: 33,
        position: "捕手",
      },
    ])
  );
});