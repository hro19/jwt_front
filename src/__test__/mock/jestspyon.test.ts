//https://qiita.com/only/items/e3c46e6155dc44644111

 describe("jest.spyOn基礎の1", () => {
  function greet(name: string) {
    console.log(`Hello, ${name}!`);
    console.log(`Hi!, ${name}!`);
    console.log(`Ola!, ${name}!`);
  }

  // 関数が呼び出されたかを確認するテスト
  test("greet関数が呼び出されたことを確認する", () => {
    // 関数のスパイ化
    const spyOnGreet = jest.spyOn(console, "log");

    // スパイ化した関数を呼び出す
    greet("Bob");

    //console.logが呼び出されたかどうかだけを確認
    expect(spyOnGreet).toHaveBeenCalled();

    //console.logが3回呼び出されたかどうかを確認
    expect(spyOnGreet).toHaveBeenCalledTimes(3);

    //console.logが1度でも指定した引数で呼び出されているかを確認
    expect(spyOnGreet).toHaveBeenCalledWith("Hello, Bob!");

    //console.logの最後の呼び出しの引数を確認
    expect(spyOnGreet).toHaveBeenLastCalledWith("Ola!, Bob!");

    //console.logの1番目の呼び出しの引数を確認
    expect(spyOnGreet).toHaveBeenNthCalledWith(1, "Hello, Bob!");

    //console.logの2番目の呼び出しの引数を確認
    expect(spyOnGreet).toHaveBeenNthCalledWith(2, "Hi!, Bob!");

    // スパイを解除
    spyOnGreet.mockRestore();
  });
});

describe("jest.spyOn基礎の2", () => {
  function generateRandomNumber() {
    return Math.random();
  }

  test("generateRandomNumber calls Math.random", () => {
    const spy = jest.spyOn(Math, "random").mockReturnValue(0.2291245446521175);

    const result = generateRandomNumber();

    expect(result).toBe(0.2291245446521175);

    spy.mockRestore();
  });
});

describe("jest.spyOn基礎の3", () => {
  function generateRandomNumber() {
    return Math.random();
  }

  test("generateRandomNumber calls Math.random", () => {
    const spy = jest
      .spyOn(Math, "random")
      .mockReturnValueOnce(0.2291245446521175)
      .mockReturnValueOnce(0.2222222222222222)
      .mockReturnValue(0.1111111111111111);

    const result1 = generateRandomNumber();
    const result2 = generateRandomNumber();
    const result3 = generateRandomNumber();
    const result4 = generateRandomNumber();

    expect(result1).toBe(0.2291245446521175);
    expect(result2).toBe(0.2222222222222222);
    expect(result3).toBe(0.1111111111111111);
    expect(result4).toBe(0.1111111111111111);

    spy.mockRestore();
  });
});

describe("jest.spyOn基礎の4", () => {
  async function fetchUserGreting(userId: number) {
    const response = await fetch(`/api/user/${userId}`);
    const user = await response.json();
    return `ユーザーID:${user.id}の${user.name}さん、こんにちは！`;
  }

  it("テストの4", () => {
    expect(4).toBe(4);
  });
});
