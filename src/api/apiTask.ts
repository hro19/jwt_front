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
  async add(formData: any) {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASIC_URL}/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      validateResponse(response);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("エラーがありました:", error);
      throw error;
    }
  },
};

// APIリクエストを行う
export const fetchTasks = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASIC_URL}/tasks`, {
    cache: "no-store",
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
  if (response.status !== 200 && response.status !== 201) {
    throw new Error("HTTPリクエストが200または201ではありません");
  }
};

export default apiTask;
