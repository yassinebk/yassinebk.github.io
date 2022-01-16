import { Box } from "@chakra-ui/react";
import React from "react";
import { useThemeBackground } from "../hooks/styleHooks";

interface pageLayoutProps {}

export const PageLayout: React.FC<pageLayoutProps> = ({ children }) => {
  const { bgColor } = useThemeBackground();
  return <Box style={{ backgroundColor: bgColor }}>{children}</Box>;
};
