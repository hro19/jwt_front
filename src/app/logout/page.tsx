"use client"

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { deleteCookie } from "cookies-next";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    deleteCookie("token");
    router.push("/");
  }, []);

  return <></>;
};

export default Page;
