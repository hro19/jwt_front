import React, { useEffect, useState } from "react";
import axios from "axios";
import authUtils from "../utils/authUtils";

const fetchUserTasks = async (userId: string) => {
  try {
    const response = await axios.get(
      `https://jwt-mongo.vercel.app/api/v1/tasks/${userId}/usertasks`
    );
    return response.data;
  } catch (error) {
    throw new Error("タスク情報の取得に失敗しました");
  }
};

const Verify = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const checkAuth = async () => {
      const isAuth = await authUtils.isAuthenticated();
      if (!isAuth) {
        console.log("認証に失敗でござります");
      } else {
        console.log("認証に大大大大大大成功");
        const userId = isAuth.data.user._id;

        // ユーザーのタスク情報を取得
        try {
          const response = await fetchUserTasks(userId);
          setTasks(response);
        } catch (error) {
          console.error("タスク情報の取得に失敗しました", error);
        }
      }
    };
    checkAuth();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold">タスク一覧</h1>
      {tasks.length === 0 ? (
        <p>タスクが登録されておりません</p>
      ) : (
        <ul>
          {tasks.map((task: any) => (
            <li key={task._id}>
              {task.name} - {task.completed ? "完了" : "未完了"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Verify;
