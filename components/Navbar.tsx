import { Center, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import { useThemeBackground } from "../hooks/styleHooks";
import { StyledDiv } from "./AnimatedDiv";
import { DropdownMenu } from "./DropdownMenu";
import { ThemeSwitcherButton } from "./ThemeSwitcherButton";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const { bgColor } = useThemeBackground();
  return (
    <Grid
      position="static"
      left={0}
      top={0}
      bgColor={bgColor}
      height="8 vh"
      minH="130px"
      gridTemplateColumns="repeat(12,1fr)"
      w="full"
      pl={[8]}
      alignItems="center"
      gridColumnGap={4}
    >
      <Center gridColumnStart={1} gridColumnEnd={6} >
        <Heading
          fontFamily={"Inversionz Unboxed"}
          fontWeight={"thin"}
          fontSize="5xl"
        >
          Yassine Belkhadem
        </Heading>
      </Center>
      <DropdownMenu />
      <ThemeSwitcherButton />
    </Grid>
  );
};
