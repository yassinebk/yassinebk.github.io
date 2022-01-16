import { Flex } from "@chakra-ui/react";
import React from "react";
import { KnowMeCard } from "./KnowMeCard";

interface GetToKnowProps {}

export const GetToKnowSection: React.FC<GetToKnowProps> = ({}) => {
  return (
    <Flex
      h="75vh"
      id="section-position-container"
      justifyContent="center"
      alignItems="center"
      w="full"
      flexDir="column"
    >
        
        <Flex>
      <KnowMeCard></KnowMeCard>
      <KnowMeCard></KnowMeCard>
      <KnowMeCard></KnowMeCard>
</Flex>
    </Flex>
  );
};
