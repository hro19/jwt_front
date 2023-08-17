"use client"

import React from 'react'
import { useRouter } from "next/navigation";

const page = () => {
    localStorage.removeItem("token");
    const router = useRouter();
    router.push("/");

  return (
    <>
    </>
  )
}

export default page
