"use client";

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { deleteCookie } from "cookies-next";
import { useToast } from "@chakra-ui/react";

const Page = () => {
  const router = useRouter();
  const toast = useToast();
  const ref = useRef(false);

  useEffect(() => {
    if (!ref.current) {
      deleteCookie("token");
      toast({
        title: "ログアウト",
        description: "ログアウトに成功しました",
        status: "success",
        duration: 5000,
        isClosable: true,
        colorScheme: "pink",
      });
      router.push("/");
      ref.current = true;
    }
  }, [router, toast]);

  return <></>;
};

export default Page;
