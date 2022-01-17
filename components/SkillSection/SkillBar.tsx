import {
  HStack,
  Progress,
  VStack,
  Text,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import ParallaxContainer from "../Parallax";
import { CustomProgress } from "../CustomProgress";

interface SkillBarProps {
  skillName: string;
  skillLevel: number;
}

export const SkillBar: React.FC<SkillBarProps> = ({
  skillLevel,
  skillName,
}) => {
  const numberColor = useColorModeValue("#258EDE", "#CFE4FF");

  return (
    <motion.div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent:'space-between',
        maxWidth:'547px'
      }}
    >
          <VStack width={["65px","65px","65px","70px"]} >
        <Text fontSize={["xl", "xl", "xl","xl", "2xl"]}>{skillName}</Text>
        <Text fontSize="2xl" color={numberColor}>
          {skillLevel}
        </Text>
      </VStack>
      <Center pb="4">
        <CustomProgress value={skillLevel} />
      </Center>
    </motion.div>
  );
};
