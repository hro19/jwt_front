"use client";

import React from "react";
import { Task } from "@/ts/Task";
import { useQuery, useMutation, QueryClient } from "@tanstack/react-query";
import AuthVerify from "@/utils/AuthVerify";
import TaskTable from "@/components/admin/TaskTable";
import apiTask from "@/api/apiTask";

const queryClient = new QueryClient();

const useTasksQuery:any = () => {
  return useQuery({ queryKey: ["tasks"], queryFn: apiTask.getAll });
};

const Tasks = () => {
  const { data: tasks, isLoading, error, refetch } = useTasksQuery();

  const deleteTaskMutation = useMutation({
    mutationFn: apiTask.deleteSingle,
    onSuccess: () => {
      // データの削除後にタスク一覧を再取得する
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const handleDelete = async (taskId: string): Promise<void> => {
    try {
      await deleteTaskMutation.mutateAsync(taskId);
      // タスク一覧を再取得する
      refetch();
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
          {tasks.map((task: Task) => (
            <TaskTable task={task} handleDelete={handleDelete} key={task._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Tasks;
