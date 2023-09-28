export const getApiAllTasks = async () => {
  try {
    const response = await fetch("https://jwt-mongo.vercel.app/api/v1/tasks");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};