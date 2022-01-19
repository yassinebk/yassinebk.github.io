import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { HStack, IconButton, Input, useColorModeValue } from "@chakra-ui/react";
import React from "react";

interface SearchbarProps {
  updateSearchFilter: (option: any) => void;
  searchFilter: any;
  resetSearchFilter: () => void;
}

export const Searchbar: React.FC<SearchbarProps> = ({
  updateSearchFilter,
  searchFilter,
  resetSearchFilter,
}) => {
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
        value={searchFilter}
        onChange={(event) => updateSearchFilter(event.target.value)}
        px="12"
        borderWidth={0}
        placeholder="Search"
        bgColor="transparent"
      />
        <IconButton aria-label='reset search' bgColor="transparent" icon={<CloseIcon/>} position="absolute" right={5} onClick={resetSearchFilter} _hover={{opacity:0.5,scale:1.1}} />
    </HStack>
  );
};
