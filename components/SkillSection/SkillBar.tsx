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
import { CustomProgress } from "./CustomProgress";

interface SkillBarProps {
  skillName: string;
  skillLevel: number;
}

export const SkillBar: React.FC<SkillBarProps> = ({
  skillLevel,
  skillName,
}) => {

    
    
  const numberColor = useColorModeValue("#258EDE", "darkSecondary");
    
  return (
      <motion.div
      
          style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems:'flex-end'
    }} >
      <VStack>
        <Text fontSize="2xl">{skillName}</Text>
        <Text fontSize="2xl" color={numberColor}>
          {skillLevel}
        </Text>
      </VStack>
      <Center pb="4">
          <CustomProgress value={skillLevel}/>
      </Center>
    </motion.div>
  );
};
