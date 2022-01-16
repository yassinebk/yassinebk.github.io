import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import ParallaxContainer from "../Parallax";
import { SectionHeading } from "../SectionHeading";
import { SkillBar } from "./SkillBar";

interface SkillSectionProps {}

export const SkillSection: React.FC<SkillSectionProps> = ({}) => {
  const style = {
    minHeight: '75vh',
    marginTop: "64px",
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    flexDirection: 'column',
    display:'flex'
  }
  return (
    <ParallaxContainer
    styleProps={style}
    >
      <SectionHeading>Technical Skills</SectionHeading>
      <Flex flexDir={["row", "row", "column", "column"]}>
        <Box>
          <SkillBar skillName="Skill here" skillLevel={10} />
        </Box>
        <Box></Box>
      </Flex>
    </ParallaxContainer>
  );
};
