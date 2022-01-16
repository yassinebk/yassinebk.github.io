import { Divider, Flex, Grid, VStack } from "@chakra-ui/react";
import React from "react";
import { useThemeBackground, useThemeText } from "../../hooks/styleHooks";
import { SectionHeading } from "../SectionHeading";
import { SkillBar } from "./SkillBar";

interface SkillSectionProps {}

export const SkillSection: React.FC<SkillSectionProps> = ({}) => {
  const style = {
    minHeight: "75vh",
    marginTop: "64px",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flexDirection: "column",
    display: "flex",
  };
  const { textColor}=useThemeText()
  return (
    <Flex {...style as any} styleProps={style}>
      <SectionHeading>Technical Skills</SectionHeading>
      <Flex
        flexDir={["column", "column", "row", "row", "row"]}
        marginTop="8"
        justifyContent="space-between"
      >
        <Grid
          gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
          gridColumnGap={[8, 12, 16, 24]}
          gridRowGap={7}
          spacing={10}
          marginRight={[0, 0, 12, 24]}
        >
          <SkillBar skillName="C++" skillLevel={65} />
          <Divider display={["block", "none"]} bgColor={textColor} />
          <SkillBar skillName="HTML 5" skillLevel={98} />
          <Divider display={["block", "none"]} bgColor={textColor} />
          <SkillBar skillName="CSS" skillLevel={100} />
          <Divider display={["block", "none"]} bgColor={textColor} />
          <SkillBar skillName="JAVASCRIPT" skillLevel={84} />
          <Divider display={["block", "none"]} bgColor={textColor} />
          <SkillBar skillName="React" skillLevel={90} />
          <Divider display={["block", "none"]} bgColor={textColor} />
          <SkillBar skillName="Python" skillLevel={70} />
          <Divider display={["block", "none"]} bgColor={textColor} />
          <SkillBar skillName="NodeJS" skillLevel={65} />
          <Divider display={["block", "none"]} bgColor={textColor} />
          <SkillBar skillName="React Native" skillLevel={70} />
          <Divider display={["block", "none"]} bgColor={textColor} />
          <SkillBar skillName="SQL" skillLevel={80} />
          <Divider display={["block", "none"]} bgColor={textColor} />
          <SkillBar skillName="Cybersecurity" skillLevel={50} />
          <Divider display={["block", "none"]} bgColor={textColor} />
          <SkillBar skillName="Computer Graphics" skillLevel={60} />
          <Divider display={["block", "none"]} bgColor={textColor} />
          <SkillBar skillName="Figma" skillLevel={100} />
          <Divider display={["block", "none"]} bgColor={textColor} />
        </Grid>
      </Flex>
    </Flex>
  );
};
