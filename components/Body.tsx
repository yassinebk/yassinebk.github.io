import { Box, Flex } from "@chakra-ui/react";
import React from "react";

interface BodyProps {}

export const Body: React.FC<BodyProps> = ({ children }) => {
  return (
    <Flex
      h="full"
      overflowY="scroll"
      overflowX="hidden"
      flexDir="column"
      zIndex="base"
    >
      <Box minH="100px" height="10vh"  id="navbar-placeholder" />
      {children}

      <Box minH="67px" id="footer-placeholder" h="20vh" w="100vw" />
    </Flex>
  );
};
