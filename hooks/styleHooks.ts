import { useColorModeValue } from "@chakra-ui/react";

export const useThemeBackground = () => {
  const bgColor = useColorModeValue("lightBackground", "darkBackground");
  const inversedBgColor = useColorModeValue(
    "darkBackground",
    "lightBackground"
  );

  return {
    bgColor,
    inversedBgColor,
  };
};

export const useThemeText = () => {
  const textColor = useColorModeValue("lightSecondary", "lightBackground");
  const inversedTextColor = useColorModeValue(
    "lightBackground",
    "lightSecondary"
  );

  return {
    textColor,
    inversedTextColor,
  };
};
