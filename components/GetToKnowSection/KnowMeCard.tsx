import { Box, Heading, useColorModeValue, VStack } from "@chakra-ui/react";
import React from "react";
import ParallaxContainer from "../Parallax";

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
  const style = {
    backgroundColor: cardBg,
    paddingLeft: "24px",
    paddingRight: "24px",
    borderRadius: 5,
    border,
    minHeight: "320px",
    width: "100%",
    paddingTop: "48px",
    alignItems: "flex-start",
    maxWidth: "425px",
  };
  let hidden;
  let show;
  switch (index) {
      case 0:
          hidden = {
              translateX: -60,
              opacity: 0
          }
          show = {
              translateX: 0,
              opacity: 1
          }
          break;
case 1:
          hidden = {
              translateY: -60,
              opacity: 0
          }
          show = {
              translateY: 0,
              opacity: 1
          }
          break;
case 2:
          hidden = {
              translateY: 60,
              opacity: 0
          }
          show = {
              translateY: 0,
              opacity: 1
          }
          break;
      }
  return (
    <ParallaxContainer styleProps={style} variants={{hidden,show}}>
      <Box>
        <Heading fontSize="3xl" bg={headerTitle} bgClip="text">
          {cardHeading}
        </Heading>
      </Box>
      <Box paddingTop="2xl">{children}</Box>
    </ParallaxContainer>
  );
};
