import {
  Box,
  Center,
  Container,
  Heading,
  Image,
  ListItem,
  OrderedList,
  Text,
} from "@chakra-ui/react";
import React from "react";

const page = () => {
  return (
    <Container>
      <Box bg={"gray.100"}>
        <Heading as={"h1"} my={3} color={"blue.200"}>
          <Center>画像をアップロードします</Center>
        </Heading>
      </Box>
      <Box bg={"green.100"}>
        <OrderedList fontSize={22}>
          <ListItem>ChakraUIを構築</ListItem>
          <ListItem>ライブラリーでアップローダーを設置</ListItem>
          <ListItem>
            アップローダーした画像をアップボタンを押すとcloudflareR2に保存
          </ListItem>
          <ListItem>保存したデータを表示させる</ListItem>
          <ListItem>保存したデータを一覧表示させる</ListItem>
        </OrderedList>
      </Box>
      <Box borderBottom={"4px solid #7700ff"}>
        <Text mt={4} color={"purple.700"} fontWeight={800}>
          クラウドフレアR2のストレージから表示させてます
        </Text>
        <Image
          //   borderRadius="full"
          boxSize="150px"
          src="https://pub-e0ab700bbdea42debc6d127861efe865.r2.dev/jules-bassoleil-_S8XcvSpQo4-unsplash.jpg"
          alt="クラウドフレアR2のストレージから"
          mb={4}
        />
      </Box>
      <Box my={"3"}>
        <input id="$inputFile" type="file" />
      </Box>
    </Container>
  );
};

export default page;
