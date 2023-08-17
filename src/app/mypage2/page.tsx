"use client";

import React from "react";
import AuthVerify from "@/utils/AuthVerify";
import { useAtom } from "jotai";
import { verifyUserAtom } from "@/jotai/userAtoms";

const Verify = () => {
    const [verifyUser, setVerifyUser] = useAtom(verifyUserAtom);

  return (
    <>
      <AuthVerify />
      <div>
        <h1 className="text-3xl font-bold">マイページ認証確認</h1>
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
    </>
  );
};

export default Verify;
