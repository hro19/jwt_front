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
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Switch,
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
        <Container>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3} mb={8}>
              <FormControl>
                <FormLabel htmlFor="name">タスク名</FormLabel>
                <Input
                  type="text"
                  id="name"
                  defaultValue="電車に乗る14"
                  {...register("name")}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="completed">進行具合</FormLabel>
                <Switch colorScheme="teal" size="lg" id="completed" defaultChecked={false} {...register("completed")} />
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
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>タスクId</Th>
              <Th>タスク名</Th>
              <Th isNumeric>進行具合</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((task: Task) => (
              <Tr key={task._id}>
                <Td>{task._id}</Td>
                <Td>{task.name}</Td>
                <Td isNumeric>{task.completed ? "完了" : "未着手"}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CreateTodo;
