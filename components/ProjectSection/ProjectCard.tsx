import { LinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  HStack,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import NextLink from "next/link";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import { Tag } from "../Tag";

interface ProjectCardProps {
  project:any
}

export const HomePageProjectCard: React.FC<ProjectCardProps> = ({
  project
}) => {
  const border = useColorModeValue("1px solid #24313A", "0px solid");
  const cardBg = useColorModeValue("transparent", "#25313A");
  const linkColor = useColorModeValue("black", "white");
  const dateColor = useColorModeValue("lightSecondary", "darkSecondary");
  const child = {
    hidden: { opacity: 0, translateY: -30, scale: 0.6 },
    show: { opacity: 1, translateY: 0, scale: 1 },
  };
  return (
    <NextLink href={`/blog/${project.post.data.attributes.slug}`}>
      <motion.div
        className="project-card-homepage"
        variants={child}
        style={{
          margin: "16px 16px",
          backgroundColor: cardBg,
          border: border,
          borderRadius: 5,
          display: "flex",
          flexDirection: "column",
          paddingTop: "24px",
          paddingBottom: "21px",
          paddingLeft: "31px",
          paddingRight: "16px",
          maxWidth: "472px",
        }}
      >
        <Box>
          <Heading as="h1">{project.title}</Heading>
          <Text color={dateColor} as="h4">
            {project.date}
          </Text>
        </Box>
        <Box h="12px" />
        <HStack>
          <Tag label="Computer Science" /> <Tag label="Great Guy" />
        </HStack>
        <Box h="20px" />

        <Box>
          <Text as="p"></Text>
        </Box>
        <Text>{project.description}</Text>
        <Box h="10px" />
        <HStack spacing={8}>
          <HStack>
            <AiFillGithub />
            <Link fontSize="xl" color={linkColor} href={project.githubLink}>
              Github Link
            </Link>
          </HStack>
          {project.livePreview && (
            <HStack>
              <LinkIcon />
              <Link fontSize="xl" color={linkColor} href={project.livePreview}>
                Live Preview
              </Link>
            </HStack>
          )}
        </HStack>
        <Box h="10px" />
        <Box
          bgColor="#D6D6D6"
          h="full"
          minH="320px"
          minW="100%"
          w="full"
          alignSelf="center"
        >
          <Image
            alt={project.coverImage.data.attributes.name}
            src={project.coverImage.data.attributes.formats.large.url}
            width={project.coverImage.data.attributes.formats.large.width}
            height={project.coverImage.data.attributes.formats.large.height}
          />
        </Box>
      </motion.div>
    </NextLink>
  );
};
