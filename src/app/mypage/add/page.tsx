"use client";

import React, { useEffect, useState } from "react";
import {
  Button,
  Box,
  Center,
  Container,
  FormControl,
  FormLabel,
  Input,
  Switch,
  Heading,
} from "@chakra-ui/react";

const App = () => {
//   const [name, setName] = useState("");
//   const [completed, setCompleted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // フォームの値を取得する
    // const formData = {
    //   name,
    //   completed,
    // };

    // フォームの値を処理する
    // ...
  };

  return (
    <div>
      <Container>
        <Heading bg={"green.800"} color={"white"} p={4} mb={8}>
          タスク新規
        </Heading>
        <Box>
          <Center>
            <FormControl mr={"4"}>
              <FormLabel htmlFor="name">名前</FormLabel>
              <Input
                id="name"
                type="text"
                value="name"
                // onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="completed">完了済み</FormLabel>
              <Switch
                id="completed"
                // checked= "true"
                // onChange={(e) => setCompleted(e.target.checked)}
              />
            </FormControl>
            <Button
              type="submit"
              onClick={handleSubmit}
              variant={"solid"}
              className="px-8 bg-yellow-700 text-white"
            >
              送信
            </Button>
          </Center>
        </Box>
      </Container>
    </div>
  );
};

export default App;
