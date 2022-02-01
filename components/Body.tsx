import { Box, Flex } from "@chakra-ui/react";
import React from "react";

interface BodyProps {
  isFooterPresent?: boolean;
}

export const Body: React.FC<BodyProps> = ({
  children,
  isFooterPresent = true,
}) => {
  return (
    <Flex
      h="full"
      overflowY="scroll"
      overflowX="hidden"
      flexDir="column"
      zIndex="base"
      position="relative"
    >
      <Box minH="100px" height="20vh" id="navbar-placeholder" />
      {children}

      {isFooterPresent && (
        <Box minH="67px" id="footer-placeholder" h="20vh" w="100vw" />
      )}
    </Flex>
  );
};
