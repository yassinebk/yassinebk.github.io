import { Box, Heading, useColorModeValue, VStack } from "@chakra-ui/react";
import React from "react";

interface KnowMeCardProps {
  cardHeading: string;
  index: number;
}

export const KnowMeCard: React.FC<KnowMeCardProps> = ({
  cardHeading,
  index,
  children,
}) => {
  const headerTitle = useColorModeValue(
    "#24313A",
    "linear-gradient(90deg, #759BB9 0%, #7E8DCA 100%)"
  );

  const border = useColorModeValue("1px solid #24313A", "0px solid");
  const cardBg = useColorModeValue("transparent", "cardDark");
  return (
    <VStack
      bgColor={cardBg}
      px="6"
      paddingTop="12"
      w="full"
      borderRadius={5}
      border={border}
      minH="320px"
      marginTop="4"
      gridColumnStart={index * 4 + 1}
      gridColumnEnd={(index + 1) * 4 + 1}
      alignItems="flex-start"
    >
      <Box>
        <Heading fontSize="3xl" bg={headerTitle} bgClip="text">
          {cardHeading}
        </Heading>
      </Box>
      <Box paddingTop="2xl">{children}</Box>
    </VStack>
  );
};
