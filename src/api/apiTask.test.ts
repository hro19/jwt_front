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

describe("fetchTasks", () => {
  it("レスポンス確認", async () => {
    const response = await fetchTasks();
    // expect(response).toBeDefined();
    expect(response.status).toBe(200);
  });
});

