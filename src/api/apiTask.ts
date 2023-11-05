export const apiTask = {
  async getAll() {
    try {
      const data = await fetchTasks();
      return data;
    } catch (error) {
      console.error("エラーがありました:", error);
      throw error;
    }
  },
  async deleteSingle(taskId: string) {
    return fetch(`${process.env.NEXT_PUBLIC_API_BASIC_URL}/tasks/${taskId}`, {
      method: "DELETE",
    });
  },
};

// APIリクエストを行う
export const fetchTasks = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASIC_URL}/tasks`, {
    cache: "force-cache",
  });
  validateResponse(response);

  const data = await response.json();
  return data;
};

// レスポンスを検証する
export const validateResponse = (response: any) => {
  if (!response.ok) {
    throw new Error("無効なレスポンスです");
  }
  if (response.status !== 200) {
    throw new Error("HTTPリクエストが200ではありません");
  }
};

export default apiTask;
