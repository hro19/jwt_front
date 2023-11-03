import { validateResponse, fetchTasks } from "./apiTask";

describe("validateResponse", () => {
  it("レスポンスがokの場合、何もしない", () => {
    const response = { ok: true, status: 200 };
    expect(() => validateResponse(response)).not.toThrow();
  });

  it("レスポンスがokでない場合、エラーをthrowする", () => {
    const response = { ok: false, status: 500 };
    expect(() => validateResponse(response)).toThrow("無効なレスポンスです");
  });

  it("statusが200でない場合、エラーをthrowする", () => {
    const response = { ok: true, status: 404 };
    expect(() => validateResponse(response)).toThrow("HTTPリクエストが200ではありません");
  });
});

import { enableFetchMocks } from "jest-fetch-mock";
enableFetchMocks();

describe("fetchTasksその1-1", () => {
  it("レスポンス確認", async () => {
    const response = await fetchTasks();
    // expect(response).toBeDefined();
    expect(response.status).toBe(200);
  });
});

// describe("fetchTasksその1-2", () => {
//   it("レスポンス確認", async () => {
//     const response = await fetchTasks();
//     expect(response.status).toBe(200);
//     expect(response).toBeGreaterThan(0); // 配列の長さが1以上か確認
//   });
// });

describe("fetchTasksその2", () => {
  it("APIリクエストに成功する場合", async () => {
    const mockData = [
      {
        _id: "6464a33a2d30f0fedd9c0f29",
        name: "床屋に髪を切りに行く",
        completed: true,
        __v: 0,
        userId: "64ca465b59acf1aa11d7152b",
      },
      {
        _id: "64ca18514bcc139cb730cae2",
        name: "自転車を修理に",
        completed: false,
        userId: "64ca465b59acf1aa11d7152b",
      },
    ];

    const mockResponse = new Response(JSON.stringify(mockData), {
      status: 200,
      headers: { "Content-type": "application/json" },
    });

    jest.spyOn(global, "fetch").mockResolvedValue(mockResponse);

    const response = await fetchTasks();
    const responseData = await response.json();
    expect(response.status).toBe(200);
    expect(responseData).toEqual(mockData);
  });
});

describe("fetchTasksその3", () => {
  it("APIリクエストが失敗する場合", () => {
    jest
      .spyOn(global, "fetch")
      .mockReturnValue(Promise.reject(new Error("Network Error")));

    return expect(fetchTasks()).rejects.toThrow("Network Error");
  });
});

