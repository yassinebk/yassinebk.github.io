import {
  Box,
  Heading,
  HStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import NextLink from "next/link";
import React from "react";
import { Tag } from "../Tag";

interface ProjectCardProps {
  blog: any;
  index: number;
}

export const BlogCard: React.FC<ProjectCardProps> = ({ blog, index }) => {
  const border = useColorModeValue("1px solid #24313A", "0px solid");
  const cardBg = useColorModeValue("transparent", "#25313A");
  const dateColor = useColorModeValue("lightSecondary", "darkSecondary");
  return (
    <NextLink href={`/blog/${blog.slug}`}>
      <motion.div
        initial={{
          opacity: 0,
          scaleX: 0.8,
        }}
        animate={{
          opacity: 1,
          scaleX: 1,
        }}
        transition={{
          duration: 0.5,
          delay: 0.1 * index,
        }}
        style={{
          margin: "8px 8px",
          maxWidth: "600px",
          minWidth: "300px",
          minHeight: "400px",
          height: "fit-content",
          width: "100%",
          backgroundColor: cardBg,
          border: border,
          borderRadius: '5px',
          flexDirection: "column",
          paddingTop: "2%",
          paddingBottom: "2%",
          paddingLeft: "4%",
          paddingRight: "4%",
        }}
      >
        <Box h="300px" w="100%" bgColor="gray.300" mb="4" borderRadius={3} />
        <HStack alignItems="center" justifyContent="space-between" height="40%">
          <Heading fontSize={["lg", "xl", "3xl", "3xl"]}>{blog.title}</Heading>
          <Text color={dateColor} as="h4">
            {blog.date}
          </Text>
        </HStack>
        <Box h="12px" />
        <HStack>
          {
            blog.tags.data.map(t => <Tag label={t.attributes.title} key={t.attributes.short} /> ) }
        </HStack>
        <Box h="20px" />
      </motion.div>
    </NextLink>
  );
};
