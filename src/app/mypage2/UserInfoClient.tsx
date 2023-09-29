"use client";

import React from "react";
import { useAtom } from "jotai";
import { verifyUserAtom } from "@/jotai/userAtoms";

const UserInfoClient = () => {
  const [verifyUser, setVerifyUser] = useAtom(verifyUserAtom);
    return (
      <div>
        <h2 className="text-xl font-bold">マイページ認証確認(クライアントコンポネント内)</h2>
        <hr />
        <div>
          {verifyUser && (
            <>
              <h4>{verifyUser._id}</h4>
              <p>{verifyUser.username}</p>
            </>
          )}
        </div>
      </div>
    );
};

export default UserInfoClient;
