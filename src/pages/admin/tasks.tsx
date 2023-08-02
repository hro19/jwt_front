import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
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
  const { data: tasks, isLoading, error } = useTasksQuery();

  const handleDelete = async (taskId:string) => {
    try {
      await axios.delete(`https://jwt-mongo.vercel.app/api/v1/tasks/${taskId}`);
      // データの削除後にタスク一覧を再取得するなどの処理を行うことができます
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
              <TableCell>状態</TableCell>
              <TableCell>削除</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task:any) => (
              <TableRow key={task._id}>
                <TableCell>{task.name}</TableCell>
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
