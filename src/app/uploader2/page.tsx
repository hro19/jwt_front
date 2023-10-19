"use client";

import { chakra,Box, Button, Heading, Flex, Spinner, Text, Link } from "@chakra-ui/react";
import { useState, useRef } from "react";

function App() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isFile, setisFile] = useState<boolean>(false);
  const [isUploaded, setIsUploaded] = useState<boolean>(false);
  const [reply, setReply] = useState<any>();

  const clearFileInput = () => {
      setIsUploaded(false);
      setFile(null);
      setisFile(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.files && setFile(e.target.files[0]);
    if (e.target.files && e.target.files.length > 0) {
      setisFile(true);
    } else {
      setisFile(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setReply(null);
    setIsUploaded(true);
    const formData = new FormData();

    file && formData.append("file", file);

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_R2_UPLOAD_URL as string, {
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
    } finally {
      clearFileInput();
    }
  };

  return (
    <>
      <Box>
        <Heading as={"h1"} size={"md"} mb={"4"}>
          ファイルアップロード
        </Heading>
      </Box>
      <Box>
        <chakra.form onSubmit={handleSubmit}>
          <Box mb={"4"}>
            <chakra.input type="file" name="file" onChange={handleChange} ref={fileInputRef} fontSize={"2xl"} />
          </Box>
          <Flex>
            <Button
              className={` hover:no-underline hover:bg-teal-800 rounded-md ${
                isFile ? "bg-teal-600" : "bg-slate-300 pointer-events-none"
              }`}
              color={"white"}
              px={"4"}
              py={"3"}
              type="submit"
            >
              ファイル送信
            </Button>
          </Flex>
        </chakra.form>
      </Box>
      <Box my={"4"}>{isUploaded ? <Spinner color="red.500" /> : ""}</Box>
      <Text fontSize={"3xl"}>{reply && reply.message}</Text>
    </>
  );
}

export default App;
