import { Heading, useColorModeValue } from "@chakra-ui/react";
import React from "react";

interface SectionHeadingProps {
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ children }) => {
  const textColor = useColorModeValue("#536073", "#ADCEFF");
  return <Heading color={textColor} fontSize='5xl'>{children}</Heading>;
};
