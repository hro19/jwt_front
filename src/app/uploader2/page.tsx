"use client";

import {
  Box,
  Button,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [file, setFile] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);
  const [reply, setReply] = useState<any>();

  const handleChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsUploaded(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("https://express-cloudflarer2.vercel.app/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setReply(data); // レスポンスデータを reply ステートにセット
      } else {
        console.error("HTTPエラー:", response.status);
      }
    } catch (error) {
      console.error("エラー:", error);
    }

    setIsUploaded(false);
  };

  return (
    <>
      <Box>
        <Heading as={"h1"} size={"md"} mb={"4"}>
          ファイルアップロード
        </Heading>
      </Box>
      <Box>
        <form onSubmit={handleSubmit}>
          <Box mb={"4"}>
            <input type="file" name="file" onChange={handleChange} />
          </Box>
          <Flex>
            <Button
              className="bg-teal-600"
              color={"white"}
              type="submit"
              disabled={isUploaded}
            >
              ファイル送信
            </Button>
          </Flex>
        </form>
      </Box>
      <Box my={"4"}>{isUploaded ? <Spinner color="red.500" /> : ""}</Box>
      <Text fontSize={"3xl"}>{ reply && reply.message}</Text>
    </>
  );
}

export default App;
