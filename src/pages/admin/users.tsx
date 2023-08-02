import React from "react";
import axios from "axios";
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

const fetchUsers = async () => {
  const response = await axios.get("https://jwt-mongo.vercel.app/api/v1/users");
  return response.data;
};

const useUsersQuery = () => {
  return useQuery("users", fetchUsers);
};

const Users = () => {
  const { data: users, isLoading, error, refetch } = useUsersQuery();

  const deleteUserMutation = useMutation(
    (userId) => axios.delete(`https://jwt-mongo.vercel.app/api/v1/users/${userId}`),
    {
      onSuccess: () => {
        // データの削除後にタスク一覧を再取得する
        refetch();
      },
    }
  );

  const handleDelete = async(userId:any) => {
    try {
      await deleteUserMutation.mutateAsync(userId);
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
      <h2 className="text-3xl font-bold mb-4">ユーザー一覧</h2>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>タイトル</TableCell>
              <TableCell>Id</TableCell>
              <TableCell>削除</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user: any) => (
              <TableRow key={user._id}>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user._id}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="success"
                    className="font-bold py-2 px-4 rounded"
                    onClick={() => handleDelete(user._id)}
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

export default Users;
