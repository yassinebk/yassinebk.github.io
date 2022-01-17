import { Button, Divider, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import Image from "next/image";
import { Flex } from "@chakra-ui/react";
import ParallaxContainer from "../Parallax";
import { SectionHeading } from "../SectionHeading";
import { motion } from "framer-motion";
import { HomePageProjectCard } from "./ProjectCard";
import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";

interface ProjectSectionProps {}

export const ProjectSection: React.FC<ProjectSectionProps> = ({}) => {
  const border = useColorModeValue("1px solid #24313A", "0px solid");
  const style = {
    minHeight: "75vh",
    marginTop: "20px",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flexDirection: "column",
    display: "flex",
    paddingBottom: 32,
    paddingLeft: "16px",
    paddingRight: "16px",
  };
  const parent = {
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.2,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  const [allVisible, setVisible] = useState(false);
  const toggleViewMore = () => {
    setVisible(!allVisible);
  };
  const array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <><Flex {...(style as any)} px={[4]}>
      <SectionHeading>Projects</SectionHeading>
      <motion.div
        layout
        variants={parent}
        initial="hidden"
        animate="show"
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100vw",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {array.slice(0, 6).map((i, index) => (
          <>
            {((!allVisible && index < 3) || allVisible) && (
              <HomePageProjectCard
                key={index}
                date="22/12/23"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit tellus integer amet rhoncus in mi sed diam. Amet mi ullamcorper."
                title="Project 1"
                id={"1"} />
            )}
          </>
        ))}
      </motion.div>
      <motion.div layoutId="button" layout>
        <Button
          border={border}
          rightIcon={allVisible ? <ArrowUpIcon /> : <ArrowDownIcon />}
          onClick={toggleViewMore}
        >
          <Text>View More</Text>
        </Button>
      </motion.div>
    </Flex><Divider /></>
  );
};
