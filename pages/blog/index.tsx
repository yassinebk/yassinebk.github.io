import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  Flex,
  HStack,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BlogCard } from "../../components/Blog/BlogCard";
import { BlogHeading } from "../../components/Blog/BlogHeading";
import { BlogTag } from "../../components/Blog/BlogTag";
import { Searchbar } from "../../components/Blog/Searchbar";
import Layout from "../../components/Layout";
import { useTagFilter } from "../../hooks/useTagFilter";
import { getAllPosts } from "../../lib/getAllPost";
import { getAllTags } from "../../lib/getAllTags";

interface BlogProps {
  posts: any;
  tags: any;
}

const BlogPage: React.FC<BlogProps> = ({ posts, tags }) => {
  const { addTag, tagFilter, resetTagFilter, toggleTag } = useTagFilter(
    [],
    tags.map((t) => t.attributes.short)
  );
  const getPosts = () => {
    return posts.filter((p) => {
      for (let i = 0; i < tagFilter.length; i++) {
        if (
          !p.attributes.tags.data
            .map((t) => t.attributes.short)
            .includes(tagFilter[i])
        )
          return false;
      }
      return true;
    });
  };
  return (
    <Layout title={"YB - Blog"} isFooterPresent={false}>
      <Searchbar
        setOption={addTag}
        filter={tagFilter}
        resetFilter={resetTagFilter}
      />
      <Box h="8" />
      <Box
        marginBottom={["60x", "60px", "60px", "120px", "0px"]}
        display={["flex", "flex", "flex", "flex", "grid"]}
        gridTemplateColumns={[
          "1fr",
          "1fr",
          "1fr",
          "1fr",
          "repeat(6,1fr)",
          "repeat(12,1fr)",
        ]}
        flexDir={"column-reverse"}
        px={[4, 4, 4, 4, 8]}
        gridGap={4}
        alignItems={["center", "center", "center", "center", "flex-end"]}
        justifyContent="space-around"
        position="relative"
      >
        <VStack
          maxW="350px"
          gridColumnStart={[1, 1, 1, 1, 1]}
          gridColumnEnd={[2, 2, 2, 3, 3, 4]}
          px={4}
          h="100%"
          marginBottom={["200px", "200px", "200px", "0px"]}
        >
          <BlogHeading>Tags</BlogHeading>{" "}
          <HStack w="100%" justifyContent="flex-end">
            <IconButton
              justifySelf="flex-end"
              size="sm"
              aria-label="clear tags"
              onClick={resetTagFilter}
              icon={<DeleteIcon />}
            />
          </HStack>
          <Box
            flexWrap="wrap"
            w="100%"
            display={["grid", "grid", "grid", "flex"]}
            flexDir={"column"}
            minW="340px"
            gridTemplateColumns="repeat(1,1fr)"
            // gridGap="24"
            px={[4, 4, 4, 0]}
          >
            {tags.map((t) => (
              <BlogTag
                activated={tagFilter.includes(t.attributes.short)}
                label={t.attributes.title}
                key={t.attributes.short}
                numberOfArticles={
                  t.attributes.posts ? t.attributes.posts.data.length : 0
                }
                onClick={() => toggleTag(t.attributes.short)}
              />
            ))}
          </Box>
        </VStack>
        <VStack
          flexGrow={1}
          px={1}
          h="full"
          gridColumnStart={[1, 1, 1, 3, 3, 4]}
          gridColumnEnd={[2, 2, 2, 2, 13]}
          w={["100vw", "100vw", "100%"]}
        >
          <Box position="static">
            <BlogHeading>Articles</BlogHeading>
          </Box>
          <Divider />
          <Flex
            w="100%"
            paddingBottom="24px"
            className="scrollbar"
            maxH={["100%", "100%", "100%", "100%", "55vh", "58vh"]}
            // overflow={[
            //   "hidden",
            //   "hidden",
            //   "hidden",
            //   "hidden",
            //   "scroll",
            //   "scroll",
            // ]}
            overflowX="hidden"
            wrap="wrap"
            flexDir="row"
            justifyContent="center"
            scrollBehavior="smooth"
            px="4"
          >
            {getPosts().map((p, i) => (
              <BlogCard
                date={p.attributes.date}
                index={i}
                key={p.attributes.slug}
                title={p.attributes.title}
                id={p.id}
              />
            ))}
          </Flex>
          <Divider />
        </VStack>
      </Box>
    </Layout>
  );
};

export default BlogPage;

export const getStaticProps = async () => {
  const posts = await getAllPosts();
  console.log(posts[0].attributes.tags.data);
  const tags = await getAllTags();
  return {
    props: {
      tags,
      posts,
    },
  };
};
