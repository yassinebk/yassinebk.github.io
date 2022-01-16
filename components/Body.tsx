import { Flex } from "@chakra-ui/react";
import React from "react";

interface BodyProps {}

export const Body: React.FC<BodyProps> = ({ children }) => {
  return (
    <Flex h="full" overflowY="scroll" overflowX="hidden" flexDir="column">
      {children}
    </Flex>
  );
};
