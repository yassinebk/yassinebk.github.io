import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { HStack, Input, useColorModeValue } from "@chakra-ui/react";
import React from "react";

interface SearchbarProps {
  setOption: (option: any) => void;
  filter: any;
  resetFilter: () => void;
}

export const Searchbar: React.FC<SearchbarProps> = ({ setOption }) => {
  const textColor = useColorModeValue("#F8F8F8", "inherit");
  return (
    <HStack
      pos="sticky"
      bgColor="cardDark2"
      position="relative"
      maxW="1200px"
      mx="auto"
      w="70vw"
      borderRadius={2}
      color={textColor}
    >
      <SearchIcon position="absolute" left={5} />
      <Input
        px="12"
        // onChange={setOption}
        borderWidth={0}
        placeholder="Search"
        bgColor="transparent"
      />
      <CloseIcon position="absolute" right={5} />
    </HStack>
  );
};
