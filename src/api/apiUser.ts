const apiUser = {
  async getApiAllUsers() {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASIC_URL}/users`);
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
  async deleteUser(userId: string) {
    return fetch(`${process.env.NEXT_PUBLIC_API_BASIC_URL}/users/${userId}`, {
      method: "DELETE",
    });
  },
};

export default apiUser;