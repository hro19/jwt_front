import React from "react";
export const runtime = "edge";
import { cookies } from "next/headers";
import UserInfoClient from "./UserInfoClient";

const Verify = () => {
  const cookieStore = cookies();
  const hasCookie = cookieStore.has("token");

  const token = hasCookie ? cookieStore.get("token") : null;

  return (
    <>
      <h2 className="text-xl font-bold">マイページ認証確認(サーバーコンポネント内)</h2>
      {token && (
        <div>
          【token情報】{token.name}: {token.value}
        </div>
      )}
      <hr />
      <UserInfoClient />
    </>
  );
};

export default Verify;
