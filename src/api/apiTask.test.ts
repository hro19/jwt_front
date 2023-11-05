import { validateResponse, fetchTasks, apiTask } from "./apiTask";

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

// describe("fetchTasksその1-2", () => {
//   it("レスポンス確認", async () => {
//     const response = await fetchTasks();
//     expect(response.status).toBe(200);

//     // responseからデータを取得
//     const responseData = await response.json();

//     // responseDataの長さを確認
//     expect(responseData.length).toBeGreaterThan(0); // 配列の長さが1以上か確認
//   });
// });

describe("fetchTasksその3", () => {
  it("APIリクエストが失敗する場合", () => {
    jest
      .spyOn(global, "fetch")
      .mockReturnValue(Promise.reject(new Error("Network Error")));

    return expect(fetchTasks()).rejects.toThrow("Network Error");
  });
});

describe("getAllのテスト", () => {
  it("fetchTasksからresponseを返す", async () => {
    const mockResponse = {
      /* create a mock response object here */
    };
    const fetchTasksMock = jest.spyOn(apiTask, "getAll").mockResolvedValue(mockResponse);

    const response = await apiTask.getAll();

    expect(fetchTasksMock).toHaveBeenCalled();
    expect(response).toEqual(mockResponse);
  });

});
