import React from "react";
import { Route } from "../utils/types.def";
import NextLink from "next/link";
import { Link as ChakraLink, useColorModeValue } from "@chakra-ui/react/";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

interface LinkProps {
  route: Route;
}

export const Link: React.FC<LinkProps> = ({ route }) => {
  const router = useRouter();
  const activeColor = useColorModeValue("lightSecondary", "darkSecondary");
  console.log(router);
  return (
    <motion.div
      initial={{
        opacity: 0,
        translateY: -10,
      }}
      animate={{
        translateY: 0,
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
    >
      <NextLink passHref href={route.route}>
        <ChakraLink
          fontFamily={"Inversionz Unboxed"}
          fontSize="4xl"
          color={router.pathname === route.route ? activeColor : "inherit"}
          textDecor={router.pathname === route.route ? "underline" : "none"}
        >
          {route.label}
        </ChakraLink>
      </NextLink>
    </motion.div>
  );
};
