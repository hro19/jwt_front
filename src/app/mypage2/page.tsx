import React from "react";
import { cookies } from "next/headers";
import AuthVerify from "@/utils/AuthVerify";
import UserInfoClient from "./UserInfoClient";

const cookieStore = cookies();
const token: any = cookieStore.get("token");

const Verify = () => {
  return (
    <>
      <h2 className="text-xl font-bold">マイページ認証確認(サーバーコンポネント内)</h2>【
      {token.name}情報】{token.value}
      <hr />
      <AuthVerify />
      <UserInfoClient />
    </>
  );
};

export default Verify;
