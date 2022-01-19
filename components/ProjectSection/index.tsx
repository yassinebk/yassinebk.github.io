import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import {
  Button,
  Divider,
  Flex,
  Portal,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { getAllProjects } from "../../lib/getAllProjects";
import { SectionHeading } from "../SectionHeading";
import { HomePageProjectCard } from "./ProjectCard";

interface ProjectSectionProps {
  projects: any[];
}

export const ProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => {
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
  return (
    <>
      <Flex {...(style as any)} px={[4]}>
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
          {projects.slice(0, 6).map((project, index) => (
            <>
              {((!allVisible && index < 3) || allVisible) && (
                <HomePageProjectCard key={index} project={project} />
              )}
            </>
          ))}
        </motion.div>
        {projects.length>3&&
          <motion.div layoutId="button" layout>
            <Button
              border={border}
              rightIcon={allVisible ? <ArrowUpIcon /> : <ArrowDownIcon />}
              onClick={toggleViewMore}
            >
              <Text>View More</Text>
            </Button>
          </motion.div>
        }
      </Flex>
      <Divider />
    </>
  );
};
