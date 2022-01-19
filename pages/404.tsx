import { WarningIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, Link, VStack } from "@chakra-ui/react";
import React from "react";
import Layout from "../components/Layout";
import NextLink from "next/link";
import { useRouter } from "next/router";

interface custom404Props {}

const Custom404: React.FC<custom404Props> = ({}) => {
  const router = useRouter();
  return (
    <Layout title={"Page not found"}>
      <VStack
        alignItems="center"
        h="40vh"
        justifyContent="center"
        color="red.400"
      >
        <Box>
          <WarningIcon fontSize="4xl" />
        </Box>
        <Heading color="red.400" h="6xl" maxH="30%">
          The page is not found{" "}
        </Heading>
        <Button
          onClick={() => router.back()}
        >
          Go Home
        </Button>
      </VStack>
    </Layout>
  );
};

export default Custom404;
