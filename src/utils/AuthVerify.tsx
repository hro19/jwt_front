"use client";

import React, { useEffect, useState } from "react";
import authUtils from "@/utils/authUtils";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { verifyUserAtom } from "@/jotai/userAtoms";

const AuthVerify = () => {
  const [verifyUser, setVerifyUser] = useAtom(verifyUserAtom);

  const router = useRouter();
  useEffect(() => {
    const checkAuth = async () => {
      const isAuth = await authUtils.isAuthenticated();
      if (!isAuth) {
        router.push("/login");
      } else {
        // console.log("認証に大大大大大大成功");
        setVerifyUser(isAuth.data.user);
      }
    };

    checkAuth();
  }, [router,setVerifyUser]);

  return <></>;
};

export default AuthVerify;
