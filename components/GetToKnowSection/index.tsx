import { Box, Flex, HStack, Text, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { SectionHeading } from "../SectionHeading";
import { KnowMeCard } from "./KnowMeCard";

interface GetToKnowProps {}

export const GetToKnowSection: React.FC<GetToKnowProps> = ({}) => {
  const color = useColorModeValue("#4F8BE4", "#98C1FF");
  const parent = {};
  const child = {};

  return (
    <Flex
      minH="75vh"
      marginTop={[16]}
      id="section-position-container"
      justifyContent="center"
      alignItems="center"
      w="full"
      flexDir="column"
    >
      <SectionHeading>Get to know me !</SectionHeading>
      <Box
        gridTemplateColumns="repeat(12,1fr)"
        alignItems="center"
        gridGap="4"
        marginTop="8"
        display={["flex", "flex", "flex", "flex"]}
        flexDir={["column", "column", "row"]}
        justifyContent="space-around"
        maxW="1323px"
        w="full"
        px={[4, 4, 4, 24]}
      >
        <KnowMeCard cardHeading={"Biographie"} index={0}>
          <Text fontSize="xl">
            I am <span style={{ color }}> 19 years old tunisian student.</span>{" "}
            I am a curious person who loves learning new things and having new
            experiences.I am a book worm an art lover and a life hacker!
          </Text>
          <a
            href="https://www.flaticon.com/free-icons/tunisia"
            title="tunisia icons"
          />
        </KnowMeCard>
        <KnowMeCard cardHeading={"Education"} index={1}>
          <Text fontSize="2xl">
            I am a second year software Engineering Student,studying at{" "}
            <span style={{ color }}>
              the National Institut of Applied Sciences and Technologies.
            </span>
          </Text>
        </KnowMeCard>
        <KnowMeCard cardHeading={"Hobbies"} index={2}>
          <motion.div variants={parent}>
            <motion.div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Box w="4" h="4" rounded="full" bgColor="#8CB0CB" mr={2} />
              <Text fontSize="xl">Cybersecurity</Text>
            </motion.div>

            <motion.div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: 16,
                alignItems: "center",
              }}
            >
              <Box w="4" h="4" rounded="full" bgColor="#8CB0CB" mr={2} />

              <Text fontSize="xl">Web Development</Text>
            </motion.div>

            <motion.div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: 16,
                alignItems: "center",
              }}
            >
              <Box w="4" h="4" rounded="full" bgColor="#8CB0CB" mr={2} />
              <Text fontSize="xl">Computer graphics</Text>
            </motion.div>

            <motion.div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: 16,
                alignItems: "center",
              }}
            >
              <Box w="4" h="4" rounded="full" bgColor="#8CB0CB" mr={2} />
              <Text fontSize="xl">UI/UX Design</Text>
            </motion.div>
          </motion.div>
        </KnowMeCard>
      </Box>
    </Flex>
  );
};
