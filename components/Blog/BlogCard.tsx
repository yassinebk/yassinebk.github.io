import {
  Box,
  Center,
  Heading,
  HStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import NextLink from "next/link";
import React, { useState } from "react";
import { Tag } from "../Tag";

interface ProjectCardProps {
  post: any;
  index: number;
}

export const BlogCard: React.FC<ProjectCardProps> = ({ post, index }) => {
  const border = useColorModeValue("1px solid #24313A", "0px solid");
  const cardBg = useColorModeValue("transparent", "#25313A");
  const dateColor = useColorModeValue("lightSecondary", "darkSecondary");
  const [scale, setScale] = useState(1);
  return (
    <NextLink href={`/blog/${post.slug}`}>
      <motion.div
        initial={{
          opacity: 0,
          scaleX: 0.8,
        }}
        className="blog-card"
        animate={{
          opacity: 1,
          scaleX: 1,
          scale: scale,
        }}
        transition={{
          duration: 0.2,
        }}
        onHoverStart={() => setScale(0.95)}
        onHoverEnd={() => setScale(1)}
        style={{
          cursor: "pointer",
          alignSelf: "stretch",
          margin: "8px 8px",
          maxWidth: "500px",
          minWidth: "300px",
          minHeight: "400px",
          width: "100%",
          backgroundColor: cardBg,
          border: border,
          borderRadius: "5px",
          flexDirection: "column",
          display: "flex",
          paddingBottom: "2%",
        }}
      >
        <Center
          minHeight="50%"
          maxH="500px"
          w="100%"
          mb="4"
          borderRadius={3}
          overflow="hidden"
        >
          <Image
            alt={post.title}
            src={post.coverImageLarge}
            width={700}
            height={500}
          />
        </Center>
        <HStack
          alignItems="center"
          justifyContent="space-between"
          height="40%"
          px={"4%"}
        >
          <Heading fontSize={["lg", "xl", "3xl", "3xl"]}>{post.title}</Heading>
          <Text color={dateColor} as="h4">
            {post.date}
          </Text>
        </HStack>
        <Box h="12px" />
        <HStack px={"4%"}>
          {post.tags.map((t: string) => (
            <Tag label={t} key={t} />
          ))}
        </HStack>
        <Box h="20px" />
      </motion.div>
    </NextLink>
  );
};
