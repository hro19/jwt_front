"use client";

import React from "react";
import axios from "axios";
import { useQuery, useMutation } from "react-query";
import AuthVerify from "@/utils/AuthVerify";
import UserTable from "@/components/admin/UserTable";
import { User } from "@/ts/User";

const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get("https://jwt-mongo.vercel.app/api/v1/users");
  return response.data;
};

const useUsersQuery = () => {
  return useQuery("users", fetchUsers);
};

const AdminUsers = () => {
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

  const handleDelete = async (userId: any):Promise<void> => {
    try {
      await deleteUserMutation.mutateAsync(userId);
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
      <AuthVerify />
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
