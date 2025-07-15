import { useState } from "react";
import { Box, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/GameHub Logo.webp";
import ThemeButton from "./ThemeButton";

interface Navbar {
  searchContent: string;
  check: Boolean;
}

const Navbar = () => {
  const handleSubmit = () => {
    console.log("submitted!");
  };

  const [searchInfo, setSearchInfo] = useState("");
  const [check, setCheck] = useState(true);

  return (
    <Box position="sticky" top={0}>
      <HStack
        justifyContent="space-between"
        alignItems="center"
        paddingX={10}
        padding={2}
      >
        <Image src={logo} boxSize="70px"></Image>
        <Text
          fontWeight="extrabold"
          fontSize={{ base: "lg", md: "2xl" }}
          letterSpacing="wide"
          as="h1"
          whiteSpace="nowrap"
          userSelect="none"
        >
          Mosh x Rawg Game Hub
        </Text>
        <ThemeButton />
      </HStack>
    </Box>
  );
};

export default Navbar;
