import { Flex, Heading, HStack, VStack } from "@chakra-ui/react";
import React from "react";

interface GetToKnowProps {}

export const GetToKnowSection: React.FC<GetToKnowProps> = ({}) => {
  return (
    <Flex
      h="75vh"
      id="section-position-container"
      justifyContent="center"
      alignItems="center"
      w="full"
    >
      <KnowMeCard></KnowMeCard>
      <KnowMeCard></KnowMeCard>
      <KnowMeCard></KnowMeCard>
    </Flex>
  );
};
