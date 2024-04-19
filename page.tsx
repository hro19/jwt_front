import React from "react";
import UserTable from "@/components/admin/UserTable";
import { User } from "@/ts/User";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Page() {
  const users: User[] = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/users`).then(response => response.json());

  const handleDelete = async (userId: any):Promise<void> => {
    console.log(userId);
  };

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
