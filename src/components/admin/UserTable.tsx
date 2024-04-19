import React from "react";
import { User } from "@/ts/User";
import AuthVerify from "@/utils/AuthVerify";
import { Box, Button, Heading, Text } from "@chakra-ui/react";

const UserTable = ({ user }: {user:User}) => {
  return (
    <>
      <AuthVerify />
      <Box className="border rounded p-4 mb-4">
        <Heading as={"h2"} className="text-lg font-semibold">{user._id}</Heading>
        <Text className="text-gray-600">【ユーザー名】{user.username}</Text>
        <Button colorScheme='pink' variant='outline' mt={2}>
          削除
        </Button>
      </Box>
    </>
  );
};

export default UserTable;
