import { Circle, HStack, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import { useThemeBackground, useThemeText } from "../../hooks/styleHooks";

interface BlogTagsProps {
  label: string;
  numberOfArticles: number;
  onClick: () => void;
  activated: boolean;
}

export const BlogTag: React.FC<BlogTagsProps> = ({
  onClick,
  label,
  numberOfArticles,
  activated,
}) => {
  const { inversedBgColor } = useThemeBackground();
  const { inversedTextColor } = useThemeText();
  console.log(activated)
  return (
    <HStack
      onClick={onClick}
      justifyContent="space-between"
      w="100%"
      py="2"
      bgColor={activated ?   inversedBgColor:"inherit"}
      color={activated ?  inversedTextColor:"inherit" }
      _hover={{
        bgColor: inversedBgColor,
        color: inversedTextColor,
        opacity: 0.8,
      }}
      borderRadius={2}
      px="1"
    >
      <Text>{label}</Text>
      <Circle bgColor="cardDark2" color="lightBackground" size="8">
        {numberOfArticles}
      </Circle>
    </HStack>
  );
};
