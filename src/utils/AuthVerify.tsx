import React, { useEffect, useState } from "react";
import authUtils from "@/utils/authUtils";
import { useRouter } from "next/navigation";

const AuthVerify = () => {

  const router = useRouter();
  useEffect(() => {
    const checkAuth = async () => {
      const isAuth = await authUtils.isAuthenticated();
      if (!isAuth) {
        router.push("/login");
      } else {
        console.log("認証に大大大大大大成功");
        const userId = isAuth.data.user._id;
        return userId;
      }
    };

    checkAuth();
  }, []);

  return (
    <div>
      明日は天気
    </div>
  )
}

export default AuthVerify
