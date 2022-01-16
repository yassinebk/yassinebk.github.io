import { Grid, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import NextLink from "next/link";
import React from "react";
import { useThemeBackground } from "../hooks/styleHooks";
import { fadeInAnimationLeft } from "../utils/constants";
import { DropdownMenu } from "./DropdownMenu";
import { ThemeSwitcherButton } from "./ThemeSwitcherButton";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const { bgColor } = useThemeBackground();
  return (
    <Grid
      zIndex="banner"
      id="navbar-container"
      position="fixed"
      left={0}
      top={0}
      bgColor={bgColor}
      height="8vh"
      minH="100px"
      gridTemplateColumns={[
        "repeat(6,1fr)",
        "repeat(6,1fr)",
        "repeat(6,1fr)",
        "repeat(12,1fr)",
      ]}
      w="full"
      pl={[2, 2, 4, 8]}
      alignItems="center"
      gridColumnGap={[1, 1, 2, 4]}
    >
      <motion.div
        className="navbar-header"
        {...fadeInAnimationLeft()}
        id="navbar-header-container"
      >
        <NextLink href="/">
          <Heading
            id="navbar-header"
            fontFamily={"Inversionz Unboxed"}
            pl={[1, 2, 0]}
            textAlign={["center", "center", "center", "left"]}
            fontWeight={"thin"}
            fontSize={["xl", "3xl", "4xl", "4xl", "5xl"]}
          >
            Yassine Belkhadem
          </Heading>
        </NextLink>
      </motion.div>
      <DropdownMenu />
      <ThemeSwitcherButton />
    </Grid>
  );
};
