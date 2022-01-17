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
import { Tag } from "../Tag";

interface ProjectCardProps {
  date: string;
  title: string;
  description: string;
  id: string;
}

export const HomePageProjectCard: React.FC<ProjectCardProps> = ({
  date,
  id,
  description,
  title,
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
    <NextLink href={`/article/${id}`}>
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
          <Heading as="h1">{title}</Heading>
          <Text color={dateColor} as="h4">
            {date}
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
        <Text>{description}</Text>
        <Box h="10px" />
        <HStack spacing={8}>
          <HStack>
            <AiFillGithub />
            <Link fontSize="xl" color={linkColor}>
              Github Link
            </Link>
          </HStack>
          <HStack>
            <LinkIcon />
            <Link fontSize="xl" color={linkColor}>
              Live Preview
            </Link>
          </HStack>
        </HStack>
        <Box h="10px" />
        <Box
          bgColor="#D6D6D6"
          h="full"
          minH="320px"
          minW="100%"
          w="full"
          alignSelf="center"
        ></Box>
      </motion.div>
    </NextLink>
  );
};
