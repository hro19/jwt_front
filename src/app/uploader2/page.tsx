"use client";

import { Box, Button, Heading,Flex, FormControl, FormLabel } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [file, setFile] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);

  const handleChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch("https://express-cloudflarer2.vercel.app/api/upload", {
      method: "POST",
      body: formData,
    });

    const reply = await response.json();
    console.log(reply.message);
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
            <FormLabel htmlFor="file">Select file:</FormLabel>
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
    </>
  );
}

export default App;
