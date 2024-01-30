"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import AuthVerify from "@/utils/AuthVerify";
import { useAtom } from "jotai";
import { verifyUserAtom } from "@/jotai/userAtoms";
import { Task } from "@/ts/Task";
import { MdCheckCircle, MdPlaylistAddCheck } from "react-icons/md";
import {
  Box,
  Heading,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Icon,
  Spinner,
  Center,
} from "@chakra-ui/react";

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
        <Box bg={"green.700"} color={"white"} py={4} mb={"5"}>
          <Heading as="h1" fontSize={"2xl"} px={"6"}>
            <Icon as={MdPlaylistAddCheck} mr={"2"} fontSize={"3xl"} />
            タスク一覧
          </Heading>
        </Box>
        <Box>
          {isLoading ? (
            <Center>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="green.500"
              size="xl"
              />
            </Center>
          ) : tasks.length === 0 ? (
            <p>タスクが登録されておりません</p>
          ) : (
            <List spacing={3}>
              {tasks.map((task: any) => (
                <ListItem key={task._id} fontSize={"xl"}>
                  <ListIcon as={MdCheckCircle} color="green.700" />
                  {task.name} - {task.completed ? "完了" : "未完了"}
                </ListItem>
              ))}
            </List>
          )}
        </Box>
      </div>
    </>
  );
};

export default Verify;