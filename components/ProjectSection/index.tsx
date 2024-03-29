import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import {
  Button,
  Divider,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
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
      {projects.length !== 0 && (
        <>
          <Flex {...(style as any)} px={[4]} id="project-section-header">
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
                padding: 16,
              }}
            >
              {projects.slice(0, 6).map((project, index) => (
                <>
                  {((!allVisible && index < 3) || allVisible) && (
                    <HomePageProjectCard
                      project={project}
                      key={project.title + index.toString() + index.toString()}
                    />
                  )}
                </>
              ))}
            </motion.div>
            {projects.length > 3 && (
              <motion.div layoutId="button" layout>
                <Button
                  border={border}
                  rightIcon={allVisible ? <ArrowUpIcon /> : <ArrowDownIcon />}
                  onClick={toggleViewMore}
                >
                  <Text>View More</Text>
                </Button>
              </motion.div>
            )}
          </Flex>
          <Divider />
        </>
      )}
    </>
  );
};
