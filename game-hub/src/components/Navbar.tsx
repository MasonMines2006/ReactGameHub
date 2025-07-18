import { useState } from "react";
import { Box, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/GameHub Logo.webp";
import ThemeButton from "./ThemeButton";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
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
        <SearchInput onSearch={onSearch} />
        <ThemeButton />
      </HStack>
    </Box>
  );
};

export default Navbar;
