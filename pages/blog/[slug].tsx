/* eslint-disable @next/next/no-img-element */
import { ChevronLeftIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  Heading,
  HStack,
  Link,
  Skeleton,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import CodeBlock from "../../components/CodeBlock";
import {
  Header1,
  Header2,
  Header3,
  Header4,
  Header5,
} from "../../components/HeaderRenderer";
import Layout from "../../components/Layout";
import { Tag } from "../../components/Tag";
import { getAllPosts } from "../../lib/getAllPost";
import { getPost } from "../../lib/getPost";
import "../../styles/blogPost.module.css";

interface BlogPostProps {
  post: any;
}

const code = ({ node, inline, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || "");
  return !inline && match ? (
    <CodeBlock
      value={String(children).replace(/\n$/, "")}
      language={match[1]}
      {...props}
    />
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  const dateColor = useColorModeValue("lightSecondary", "darkSecondary");

  const textColor = useColorModeValue("#536073", "#ADCEFF");
  if (!post) {
    return null;
  }

  return (
    <Layout title={post.attributes.title}>
      <NextLink href="/blog" passHref>
        <Box ml="10%">
          <Link display="flex" flexDir="row" alignItems="center">
            <ChevronLeftIcon />
            <Text ml={2} fontSize="2xl" fontWeight="bold">
              {" "}
              Go Back
            </Text>
          </Link>
        </Box>
      </NextLink>

      {!post ? (
        <VStack mt="5%">
          <Skeleton height="20vh" minH="400px" w="70vw" />
          <Skeleton height="5vh" w="70vw" />
          <Skeleton height="5vh" w="70vw" />
          <Skeleton height="5vh" w="70vw" />
        </VStack>
      ) : (
        <VStack
          alignItems="center"
          maxW="1000px"
          mx={["4px", "4px", "4px", "auto"]}
        >
          <Heading
            color={textColor}
            fontSize={["3xl", "4xl", "6xl", "7xl"]}
            textAlign="center"
          >
            {post.attributes.title}
          </Heading>
          <Text color={dateColor}>{post.attributes.date}</Text>
          <HStack wrap="wrap">
            {post.attributes.tags.data.map((t) => (
              <Tag label={t.attributes.title} key={t.attributes.short} />
            ))}
          </HStack>
          <Box h="32px" />
          <Box borderRadius={2} shadow="md" px={[8, 8, 10, 10]}>
            <Image
              alt={post.attributes.coverImage.data.attributes.name}
              src={post.attributes.coverImage.data.attributes.formats.large.url}
              width={
                post.attributes.coverImage.data.attributes.formats.large.width
              }
              height={
                post.attributes.coverImage.data.attributes.formats.large.height
              }
            />
          </Box>
          <Divider maxW="900px" my={12} />
          <Box w="100%" maxW="800px" className="blogPost" px={[10, 10, 12, 12]}>
            <ReactMarkdown
              remarkPlugins={[gfm]}
              components={{
                h1: Header1,
                h2: Header2,
                h3: Header3,
                h4: Header4,
                h5: Header5,
                code,
                li: (props) => (
                  <HStack alignItems="center" my={1}>
                    <Box w="1" h="1" rounded="full" bgColor="#8CB0CB" mr={1} />
                    <Text>{props.children}</Text>
                  </HStack>
                ),

                img: (props) => {
                  return (
                    <VStack alignItems="center" my={12}>
                      <img src={props.src} alt={props.alt} />
                      <Text
                        colorScheme="blackAlpha"
                        alignSelf="center"
                        mx="auto"
                        w="fit-content"
                        textAlign="center"
                      >
                        {props.alt}
                      </Text>
                    </VStack>
                  );
                },
              }}

              // transformLinkUri={}
              // transformImageUri={}
            >
              {post.attributes.content}
            </ReactMarkdown>
          </Box>
        </VStack>
      )}
    </Layout>
  );
};
export default BlogPost;

export const getStaticPaths = async () => {
  const res = await getAllPosts();

  const paths = res.map((post) => {
    return {
      params: { slug: post.attributes.slug }, //Generating paths with [slug] subs
    };
  });
  return {
    paths,
    fallback: true,
  };
};

export async function getStaticProps({ params }) {
  const post = await getPost(params.slug);

  if (!post) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}
