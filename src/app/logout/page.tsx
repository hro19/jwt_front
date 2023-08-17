"use client"

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem("token");
    router.push("/");
  }, []);

  return <></>;
};

export default Page;
