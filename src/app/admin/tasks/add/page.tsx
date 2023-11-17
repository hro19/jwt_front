"use client";

import React, { useState } from "react";
import { Task } from "@/ts/Task";
import { useQuery, useMutation, QueryClient } from "@tanstack/react-query";
import AuthVerify from "@/utils/AuthVerify";
import TaskTable from "@/components/admin/TaskTable";
import apiTask from "@/api/apiTask";

const queryClient = new QueryClient();

const formData: any = {
  name: "電車に乗る14",
  completed: true,
  userId: "64ca465b59acf1aa11d7152b",
};

const CreateTodo = () => {

  const {
    data,
    isLoading,
    error,
    refetch,
  } = useQuery({ queryKey: ["tasks"], queryFn: apiTask.getAll });

  const mutation = useMutation({
    mutationFn: apiTask.add,
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["tasks"] });
        refetch();
    },
  });

  const onCreateTodo = (e: any) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <>
      <button
        onClick={() => {
          mutation.mutate(formData);
        }}
      >
        新規タスク
      </button>
      <hr />
      <hr />
      <div className="grid gap-4 mx-2 grid-cols-1 lg:grid-cols-3 lg:mx-3">
        {data.map((task: Task) => (
          <li key={task._id}>{task.name}</li>
        ))}
      </div>
    </>
  );
};

export default CreateTodo;
