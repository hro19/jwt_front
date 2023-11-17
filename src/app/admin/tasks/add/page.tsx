"use client";

import React from "react";
import { Task } from "@/ts/Task";
import { useQuery, useMutation, QueryClient } from "@tanstack/react-query";
import apiTask from "@/api/apiTask";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";

type FormData = {
  name: string;
  completed: boolean;
  userId: string;
};

const queryClient = new QueryClient();

const CreateTodo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["tasks"],
    queryFn: apiTask.getAll,
  });

  const mutation = useMutation({
    mutationFn: apiTask.add,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      refetch();
    },
  });

  const onSubmit = (formData: any) => {
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
      <Box>
        <Container maxW="680px">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
              <FormControl>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  type="text"
                  id="name"
                  defaultValue="電車に乗る14"
                  {...register("name")}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="completed">Completed</FormLabel>
                <Checkbox id="completed" defaultChecked {...register("completed")} />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="userId">User ID</FormLabel>
                <Input
                  type="text"
                  id="userId"
                  defaultValue="64ca465b59acf1aa11d7152b"
                  {...register("userId")}
                />
              </FormControl>
              <Button
                bg="white"
                border="1px"
                borderColor="blue.500"
                _hover={{ bg: "blue.100" }}
                fontSize="lg"
                type="submit"
                w={32}
              >
                新規タスク
              </Button>
            </Stack>
          </form>
        </Container>
      </Box>
      <hr />
      <hr />
      <div className="grid gap-4 mx-2 grid-cols-1 lg:grid-cols-3 lg:mx-3 mt-6">
        {data.map((task: Task) => (
          <dl key={task._id}>
            <dt>{task._id}</dt>
            <dd>{task.name}</dd>
            <dd>{task.completed ? "完了" : "未着手"}</dd>
          </dl>
        ))}
      </div>
    </>
  );
};

export default CreateTodo;
