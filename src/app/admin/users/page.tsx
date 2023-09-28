"use client";

import React from "react";
import axios from "axios";
import { useQuery, useMutation, QueryClient } from "@tanstack/react-query";
import UserTable from "@/components/admin/UserTable";
import { User } from "@/ts/User";
import { getApiAllUsers } from "@/api/user/getApiAllUsers";

const queryClient = new QueryClient();

const useUsersQuery = () => {
  return useQuery({ queryKey: ["users"], queryFn: getApiAllUsers });
};

const AdminUsers = () => {
  const { data: users, isLoading, error, refetch } = useUsersQuery();

  const deleteUser = (userId:string) => axios.delete(`https://jwt-mongo.vercel.app/api/v1/users/${userId}`);

  const deleteUserMutation = useMutation({
      mutationFn: deleteUser,
      onSuccess: () => {
        // データの削除後にタスク一覧を再取得する
        queryClient.invalidateQueries({ queryKey: ["users"] });
      },
    },
  );

  const handleDelete = async (userId: any):Promise<void> => {
    try {
      await deleteUserMutation.mutateAsync(userId);
      // タスク一覧を再取得する
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error</div>
  }

  return (
    <>
      <div className="container mx-auto my-4">
        <h2 className="text-3xl font-bold text-center mb-4">ユーザー一覧</h2>
        <div className="grid gap-4 mx-2 grid-cols-1 lg:grid-cols-3 lg:mx-3">
          {users && users.map((user: User) => (
            <UserTable user={user} handleDelete={handleDelete} key={user._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminUsers;
