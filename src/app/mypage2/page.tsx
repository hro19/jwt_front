"use client";

import React from "react";
import AuthVerify from "@/utils/AuthVerify";

const Verify = () => {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold">マイページ認証確認</h1>
      </div>
      <AuthVerify />
    </>
  );
};

export default Verify;
