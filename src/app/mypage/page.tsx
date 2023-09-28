"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import AuthVerify from "@/utils/AuthVerify";
import { useAtom } from "jotai";
import { verifyUserAtom } from "@/jotai/userAtoms";
import { Task } from "@/ts/Task";
import { Box,Heading } from "@chakra-ui/react";

const fetchUserTasks = async (userId: string):Promise<Task[]> => {
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
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [verifyUser, setVerifyUser] = useAtom(verifyUserAtom);

  useEffect(() => {
    if (verifyUser && verifyUser._id) {
      const fetchTasks = async () => {
        try {
          const response = await fetchUserTasks(verifyUser._id);
          setTasks(response);
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching tasks:", error);
          setIsLoading(false);
        }
      };

      fetchTasks();
    }
  }, [verifyUser]);

  return (
    <>
      <AuthVerify />
      <div>
        <Box bg={"green"} color={"white"} py={4}>
          <Heading as="h1" fontSize={"2xl"}>タスク一覧</Heading>
        </Box>
        <div>
          {isLoading ? (
            <p>読み込み中...</p>
          ) : tasks.length === 0 ? (
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
      </div>
    </>
  );
};

export default Verify;
