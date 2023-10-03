const apiTask = {
  async getApiAllTasks() {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASIC_URL}/tasks`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  },
  async deleteTask(taskId: string) {
    return fetch(`${process.env.NEXT_PUBLIC_API_BASIC_URL}/tasks/${taskId}`, {
      method: "DELETE",
    });
  },
};

export default apiTask;