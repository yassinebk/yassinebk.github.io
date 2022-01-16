import { Center, Text } from "@chakra-ui/react";
import React from "react";
import { useThemeBackground, useThemeText } from "../hooks/styleHooks";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  const { inversedBgColor } = useThemeBackground();
  const { inversedTextColor } = useThemeText();
  return (
    <Center
      as="footer"
      id="main-footer"
      w="100vw"
      position="fixed"
      bottom={0}
      h="6%"
      minH="67px"
      bgColor={inversedBgColor}
      color={inversedTextColor}
    >
      <Text fontStyle="400" fontSize={["lg","lg", "2xl"]}>
        &copy; Yassine Belkhadem, 2022 · All Copyrights Reserved.
      </Text>
    </Center>
  );
};
