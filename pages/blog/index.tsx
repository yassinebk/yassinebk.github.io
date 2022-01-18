import { Box, Divider, Flex, Grid, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import { BlogCard } from "../../components/Blog/BlogCard";
import { BlogHeading } from "../../components/Blog/BlogHeading";
import { BlogTag } from "../../components/Blog/BlogTag";
import { Searchbar } from "../../components/Blog/Searchbar";
import Layout from "../../components/Layout";
import { useFilter } from "../../hooks/useFilter";

interface BlogProps {}

const BlogPage: React.FC<BlogProps> = ({}) => {
  const { setOption, filter, resetFilter } = useFilter();
  const mockData=[1,1,1,1,1,1,1,1,1,,1,1,1]
  return (
    <Layout title={"YB - Blog"} isFooterPresent={false}>
      <Searchbar
        setOption={setOption}
        filter={filter}
        resetFilter={resetFilter}
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
          <BlogHeading>Tags</BlogHeading>
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
            <BlogTag
              label="Label ONE"
              numberOfArticles={3}
              onClick={() => console.log("set filter")}
            />
            <BlogTag
              label="Label ONE"
              numberOfArticles={3}
              onClick={() => console.log("set filter")}
            />
            <BlogTag
              label="Label ONE"
              numberOfArticles={3}
              onClick={() => console.log("set filter")}
            />
            <BlogTag
              label="Label ONE"
              numberOfArticles={3}
              onClick={() => console.log("set filter")}
            />
            <BlogTag
              label="Label ONE"
              numberOfArticles={3}
              onClick={() => console.log("set filter")}
            />
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
            {mockData.map((el, i) => <BlogCard date="2/02/12" description="Loream daskfmkadsfkjaslfjadslfjalsdfljaslkdjfl" index={i} key={i} title="How to reach the stars and beome a agreat" />)}
      
          </Flex>
          <Divider />
        </VStack>
      </Box>
    </Layout>
  );
};

export default BlogPage;
