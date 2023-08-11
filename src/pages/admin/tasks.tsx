import React from "react";
import axios from "axios";
import { Task } from "../../ts/Task";
import { useQuery, useMutation } from "react-query";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

const fetchTasks = async () => {
  const response = await axios.get("https://jwt-mongo.vercel.app/api/v1/tasks");
  return response.data;
};

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

  const handleDelete = async(taskId:string) => {
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
    <div className="container mx-auto my-4">
      <h2 className="text-3xl font-bold mb-4">タスク一覧</h2>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>タイトル</TableCell>
              <TableCell>ユーザーID</TableCell>
              <TableCell>状態</TableCell>
              <TableCell>削除</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task: Task) => (
              <TableRow key={task._id}>
                <TableCell>{task.name}</TableCell>
                <TableCell>{task.userId}</TableCell>
                <TableCell>{task.completed.toString()}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleDelete(task._id)}
                  >
                    削除
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Tasks;
