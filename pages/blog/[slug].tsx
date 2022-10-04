/* eslint-disable @next/next/no-img-element */
import { ChevronLeftIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  Heading,
  HStack,
  IconButton,
  Link,
  Skeleton,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import fs from "fs";
import Image from "next/image";
import NextLink from "next/link";
import path from "path";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import SyntaxHighlight from "../../components/CodeBlock";
import {
  BoldText,
  Header1,
  Header2,
  Header3,
  Header4,
  Header5,
  HR,
  LinkTag,
} from "../../components/HeaderRenderer";
import Layout from "../../components/Layout";
import { Tag } from "../../components/Tag";
import { useThemeBackground } from "../../hooks/styleHooks";
import "../../styles/blogPost.module.css";
import { getDocBySlug } from "../../utils/getDocBySlug";
import { fetchAPI } from "../../lib/api";
import qs from "qs";

interface BlogPostProps {
  post: any;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  const dateColor = useColorModeValue("lightSecondary", "darkSecondary");
  console.log(post);

  const textColor = useColorModeValue("#536073", "#ADCEFF");
  if (!post) {
    return null;
  }

  return (
    <Layout
      title={post.meta.title}
      description={post.content.slice(30)}
      imageLink={post.meta["cover-image-small"]}
    >
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
          position="relative"
          alignItems="center"
          maxW="1300px"
          mx={["4px", "4px", "4px", "auto"]}
        >
          <Heading
            color={textColor}
            fontSize={["3xl", "4xl", "6xl", "7xl"]}
            textAlign="center"
          >
            {post.meta.title}
          </Heading>
          <Text color={dateColor}>{post.meta.date}</Text>
          <HStack wrap="wrap">
            {post.meta.tags.map((t: string) => (
              <Tag label={t} key={t} />
            ))}
          </HStack>
          <Box h="32px" />
          <Box borderRadius={2} shadow="md" px={[8, 8, 10, 10]}>
            <Image
              alt={post.meta.title + " cover image"}
              src={post.meta["cover-image-large"]}
              width={1200}
              height={900}
            />
          </Box>
          <Divider maxW="1200px" my={12} />
          <Box
            w="100%"
            maxW="1300px"
            className="blogPost"
            px={[10, 10, 12, 12]}
          >
            <ReactMarkdown
              remarkPlugins={[gfm]}
              components={{
                h1: Header1,
                h2: Header2,
                h3: Header3,
                h4: Header4,
                h5: Header5,
                strong: BoldText,
                p: Text,
                hr: HR,
                a: LinkTag,
                img: (props) => {
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  const [zoomed, setZoom] = useState(false);
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  const { bgColor } = useThemeBackground();
                  return (
                    <VStack
                      bgColor={zoomed ? "blackAlpha.400" : "transparent"}
                      alignItems="center"
                      my={zoomed ? "auto" : 12}
                      onClick={() => setZoom(!zoomed)}
                      position={zoomed ? "fixed" : "inherit"}
                      backdropBlur={zoomed ? "2xl" : "none"}
                      zIndex={4}
                      mx="auto"
                      width={zoomed ? "100vw" : "auto"}
                      height={zoomed ? "100vh" : "auto"}
                      left={0}
                      bottom={0}
                      translateY={"50%"}
                      display="flex"
                      justifyContent="center"
                    >
                      {zoomed && (
                        <IconButton
                          size="sm"
                          bgColor={bgColor}
                          color={textColor}
                          aria-label="close image"
                          icon={<CloseIcon />}
                          onClick={() => setZoom(false)}
                        />
                      )}
                      <VStack
                        my={12}
                        mx={zoomed ? "auto" : 1}
                        maxW={"1300px"}
                        // maxH="80vh"
                      >
                        <img
                          src={props.src}
                          alt={props.alt}
                          style={{ height: "auto", width: "auto", scale: 1.2 }}
                        />
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
                    </VStack>
                  );
                },
                ...SyntaxHighlight,

                // code: Code,
              }}
            >
              {post.content}
            </ReactMarkdown>
          </Box>
        </VStack>
      )}
    </Layout>
  );
};
export default BlogPost;

export const getStaticPaths = async () => {
  console.log(process.cwd());
  const files = fs.readdirSync(path.join(process.cwd(), "content", "posts"));

  const paths = files.map((filename) => {
    return {
      params: { slug: filename }, //Generating paths with [slug] subs
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export async function getStaticProps({ params }) {
  const post = getDocBySlug(params.slug);

  const query = qs.stringify(
    {
      populate: "*",
    },
    {
      encodeValuesOnly: true,
    }
  );

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
      post: {
        ...post,
      },
    },
    revalidate: 10,
  };
}
