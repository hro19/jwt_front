import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Flex, HStack, Spacer } from "@chakra-ui/react";

const uMenus = [
  {
    href: "/logout",
    text: "ログアウト",
  },
  {
    href: "/login",
    text: "ログイン",
  },
  {
    href: "/register",
    text: "新規登録",
  },
];

const UtilityMenu = () => {
  return (
    <Flex alignItems={"center"}>
      <Box mb="1">
        <Image className="" src="/logo.png" alt="ロゴ" width={180} height={37} priority />
      </Box>
      <Spacer />
      <Box mr="3">
        <HStack spacing={2}>
          <Link
            href="/logout"
            className="inline-flex items-center justify-center px-4 py-1 text-sm font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
          >
            ログアウト
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center justify-center px-4 py-1 text-sm font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
          >
            ログイン
          </Link>
          <Link
            href="/register"
            className="inline-flex items-center justify-center px-4 py-1 text-sm font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
          >
            新規登録
          </Link>
        </HStack>
      </Box>
    </Flex>
  );
};

export default UtilityMenu;
