"use client";

import React from "react";
import axios from "axios";
// import { Task } from "../../ts/Task";
import { useQuery, useMutation } from "react-query";
import AuthVerify from "@/utils/AuthVerify";
import TaskTable from "@/components/admin/TaskTable";
import { getApiAllTasks } from "@/api/task/getApiAllTasks";

const fetchTasks = getApiAllTasks;

const useTasksQuery = () => {
  return useQuery("tasks", fetchTasks);
};

const Tasks = () => {
  const { data: tasks, isLoading, error, refetch } = useTasksQuery();

  const deleteTaskMutation = useMutation(
    (taskId: string) =>
      axios.delete(`https://jwt-mongo.vercel.app/api/v1/tasks/${taskId}`),
    {
      onSuccess: () => {
        // データの削除後にタスク一覧を再取得する
        refetch();
      },
    }
  );

  const handleDelete = async (taskId: string) => {
    try {
      await deleteTaskMutation.mutateAsync(taskId);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <>
      <AuthVerify />
      <div className="container mx-auto my-4">
        <h2 className="text-3xl font-bold text-center mb-4">タスク全一覧</h2>
        <div className="grid gap-4 mx-2 grid-cols-1 lg:grid-cols-3 lg:mx-3">
          {tasks.map((task: any) => (
            <TaskTable task={task} handleDelete={handleDelete} key={task._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Tasks;
