import { Circle, HStack, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import { useThemeBackground, useThemeText } from "../../hooks/styleHooks";

interface BlogTagsProps {
  label: string;
  numberOfArticles: number;
  onClick: () => void;
}

export const BlogTag: React.FC<BlogTagsProps> = ({
  onClick,
  label,
  numberOfArticles,
}) => {
  const { inversedBgColor } = useThemeBackground();
  const { inversedTextColor } = useThemeText();
  return (
    <HStack
      onClick={onClick}
      justifyContent="space-between"
      w="100%"
      py="2"
      _hover={{
        bgColor: inversedBgColor,
        color: inversedTextColor,
      }}
      px="1"
    >
      <Text>{label}</Text>
      <Circle bgColor="cardDark2" color="lightBackground" size="8">
        {numberOfArticles}
      </Circle>
    </HStack>
  );
};
