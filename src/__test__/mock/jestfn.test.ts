//【参考サイト】qiita.com/only/items/466a09c8602466fe2333

https: describe("jest.fn基礎の1", () => {
  function exampleFunction(fn: () => void): void {
    fn();
    fn();
  }

  it("jest.fnを呼び出し確認", () => {
    const mockFunction = jest.fn();
    mockFunction();
    expect(mockFunction).toHaveBeenCalled();
  });

  it("jest.fnを呼び出し回数その1", () => {
    const mockFunction = jest.fn();
    mockFunction();
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });

  it("jest.fnを呼び出し回数その2", () => {
    const mockFunction = jest.fn();
    exampleFunction(mockFunction);
    expect(mockFunction).toHaveBeenCalledTimes(2);
  });

  it("jest.fnを呼び出し回数その3", () => {
    const mockFunction = jest.fn();
    mockFunction();
    exampleFunction(mockFunction);
    expect(mockFunction).toHaveBeenCalled();
    expect(mockFunction).toHaveBeenCalledTimes(3);
  });
});

describe("jest.fn基礎の2", () => {
  function exampleFunction(fn: () => void): void {
    fn("arg1", "arg2");
  }

  test("test2", () => {
    const mockFunction = jest.fn();

    // exampleFunction の中でモック関数を呼び出します
    exampleFunction(mockFunction);

    // mockFunction が 'arg1','arg2' という引数で呼び出されたことを確認します
    expect(mockFunction).toHaveBeenCalledWith("arg1", "arg2");
  });
});

describe("jest.fn基礎の3", () => {
  function exampleFunction(fn: () => void): void {
    return fn();
  }

  test("test3", () => {
    const mockFunction = jest.fn();
    mockFunction.mockReturnValue("関数の返り値です");
    const result = exampleFunction(mockFunction);
    expect(result).toBe("関数の返り値です");
  });

  test("test3_2", () => {
    const mockFunction = jest.fn();
    mockFunction.mockReturnValue("関数の返り値です2");
    const result = mockFunction();
    expect(result).toBe("関数の返り値です2");
  });
});

describe("jest.fn基礎の4", () => {
  test("test4", () => {
    const mockFunction = jest.fn();

    // モック関数が呼び出されるたびに異なる値を返すように設定
    mockFunction.mockReturnValueOnce(10).mockReturnValueOnce(20).mockReturnValue(30);

    // 1回目の呼び出し
    const firstCall = mockFunction();
    expect(firstCall).toBe(10);

    // 2回目の呼び出し
    const secondCall = mockFunction();
    expect(secondCall).toBe(20);

    // 3回目以降の呼び出し
    const thirdCall = mockFunction();
    expect(thirdCall).toBe(30);

    // 4回目以降の呼び出し
    const fourthCall = mockFunction();
    expect(fourthCall).toBe(30);

    // mockFunctionが正確に4回呼び出されたことを確認
    expect(mockFunction).toHaveBeenCalledTimes(4);
  });
});

describe("jest.fn基礎の5", () => {
    function exampleFunction(fn) {
      return fn(5, 7);
    }

    test("test5", () => {
      const mockFunction = jest.fn((num1, num2) => {
        return num1 * num2;
      });

      // exampleFunction の中でモック関数を呼び出します
      const result = exampleFunction(mockFunction);

      // mockFunction の実装が正しく実行され戻り値が 35 になっていることを確認します
      expect(result).toBe(35);

      // mockFunction が引数 (5, 7) で呼び出されたことを確認します
      expect(mockFunction).toHaveBeenCalledWith(5, 7);
    });
});

test("test6", () => {
    const mockKakezan = jest.fn((num1, num2) => {
        return num1 * num2;
    });
    const result = mockKakezan(7, 7);
    expect(result).toBe(49);

    const mockFunction2 = jest.fn();
    mockFunction2.mockImplementation((num1, num2) => num1 + num2);
    expect(mockFunction2(15,15)).toBe(30);

});
