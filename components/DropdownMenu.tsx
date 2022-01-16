import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Collapse,
  Flex,
  IconButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { useThemeBackground, useThemeText } from "../hooks/styleHooks";
import { Routes, zoomInAnimation } from "../utils/constants";
import { HamburgerIcon } from "./Icons";
import { Link } from "./Link";

interface DropdownMenuProps {}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({}) => {
  const { isOpen, onToggle } = useDisclosure();
  const { bgColor, inversedBgColor } = useThemeBackground();
  return (
    <Flex
      id="dropdown-menu-container"
      position="relative"
      overflow="visible"
      zIndex={2}
      alignItems="center"
      flexDir="column"
      justifyContent="center"
      bgColor={bgColor}
      gridColumnStart={[3, 3, 3, 6]}
      gridColumnEnd={[6, 6, 6, 9]}
      height="full"
      width={"full"}
      borderTop={0}
    >
      <VStack
        backgroundColor={bgColor}
        id="dropdown-menu"
        flexDir="column"
        w="full"
        alignItems="center"
        borderRadius={5}
        top="0px"
        position="absolute"
        zIndex={2}
        paddingTop="40px"
        border="0.4px solid "
        borderColor={inversedBgColor}
        borderTop={0}
        borderWidth={isOpen ? "0.4px" : 0}
        paddingBottom={isOpen ? 12 : 0}
      >
        <motion.div {...zoomInAnimation()} id="dropdown-menu-list">
          <IconButton
            minH="60px"
            minW="60px"
            bgColor={bgColor}
            onClick={onToggle}
            border="0.4px solid"
            borderColor={inversedBgColor}
            borderRadius="999999px"
            icon={isOpen ? <CloseIcon /> : HamburgerIcon}
            color="inherit"
            padding="10.3125px"
            justifyContent="center"
            alignItems="center"
            aria-label="Dropdown button"
          />
        </motion.div>

        <Collapse in={isOpen} animateOpacity>
          <Box h="10px" />
          <VStack spacing={"8"} bgColor={bgColor} id="dropdown-menu-items">
            {Routes.map((r) => (
              <Link route={r} key={r.label} />
            ))}
          </VStack>
        </Collapse>
      </VStack>
    </Flex>
  );
};
