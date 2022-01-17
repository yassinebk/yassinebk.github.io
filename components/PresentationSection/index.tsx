import {
  Box,
  Divider,
  Flex,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";
import {
  fadeInAnimationLeft,
  fadeInAnimationRight,
  fadeInAnimationUp,
} from "../../utils/constants";
import Parallax from "../Parallax";
import { AnimatedHeader } from "./AnimatedHeader";

interface PresentationSectionProps {}

export const PresentationSection: React.FC<PresentationSectionProps> = ({}) => {
  const firecrackersBg = useColorModeValue(
    "linear-gradient(90deg, #DA4D4D 0%, #DA5104 52.6%, #745A28 100%)",
    " linear-gradient(90deg, #DA4D4D 0%, #DA5104 52.6%, #745A28 100%)"
  );
  const elemetColors = useColorModeValue(
    " linear-gradient(90deg, #326EB9 0%, rgba(43, 86, 236, 0.96) 101.94%)",
    "linear-gradient(90deg, #A8C0FF 0%, #CFE4FF 101.94%)"
  );

  const variants = {
    show: { opacity: 1, translateY: 0 },
    hidden: { opacity: 0, translateY: -200 },
  };

  return (
    <><Parallax
      variants={variants}
      styleProps={{ minHeight: "75vh", width: "100%" }}
    >
      <Flex
        w="full"
        id="section-position-container"
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          id="section-elements-container"
          flexDir={["column-reverse", "column-reverse", "row"]}
          justifyContent={"space-evenly"}
          alignItems={["center"]}
          px="4"
        >
          <Box w={["80%", "70%", "full"]} maxW="400px">
            <motion.div {...fadeInAnimationLeft(1.2)}>
              <Image
                priority
                src="/assets/LeftSection.png"
                width={474}
                height={614}
                alt="my picture" />
            </motion.div>
          </Box>
          <VStack
            w="full"
            alignItems={["center", "flex-start"]}
            spacing={[12, 8]}
            marginLeft="8"
          >
            <VStack alignItems={["center", "flex-start"]}>
              <AnimatedHeader
                fontSize={["2xl", "2xl", "2xl", "4xl"]}
                animation={fadeInAnimationRight(0.6, 0.2)}
              >
                Hi I am
              </AnimatedHeader>
              <AnimatedHeader
                textAlign={["center", "left"]}
                fontSize={["4xl", "4xl", "4xl", "6xl"]}
                bg=" linear-gradient(90deg, #759BB9 0%, #7E8DCA 100%)"
                bgClip="text"
                animation={fadeInAnimationRight(0.6, 0.4)}
              >
                Yassine Belkhadem
              </AnimatedHeader>
              <AnimatedHeader
                fontSize="2xl"
                bg={firecrackersBg}
                bgClip="text"
                animation={fadeInAnimationRight(0.6, 0.8)}
              >
                F1r3Cr4CK3r5
              </AnimatedHeader>
            </VStack>
            <VStack id="labels" alignItems={["center", "flex-start"]} flex={1}>
              <AnimatedHeader
                fontSize="3xl"
                animation={fadeInAnimationUp(0.5, 1.2)}
              >
                I am
              </AnimatedHeader>
              <AnimatedHeader
                fontSize={["3xl", "3xl", "3xl", "36px"]}
                bg={elemetColors}
                bgClip="text"
                animation={fadeInAnimationUp(0.5, 1.6)}
              >
                Digital Craftsman
              </AnimatedHeader>
              <AnimatedHeader
                fontSize={["3xl", "3xl", "3xl", "36px"]}
                bg={elemetColors}
                bgClip="text"
                animation={fadeInAnimationUp(0.5, 2.0)}
              >
                Full Stack Developer
              </AnimatedHeader>
              <AnimatedHeader
                bg={elemetColors}
                fontSize={["3xl", "3xl", "3xl", "36px"]}
                bgClip="text"
                animation={fadeInAnimationUp(0.5, 2.4)}
              >
                UI/UX Designer
              </AnimatedHeader>
            </VStack>
          </VStack>
        </Flex>
      </Flex>
    </Parallax><Divider /></>
  );
};
