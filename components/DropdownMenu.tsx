import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Collapse,
  Flex,
  IconButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useThemeBackground, useThemeText } from "../hooks/styleHooks";
import { Routes } from "../utils/constants";
import { HamburgerIcon } from "./Icons";
import { Link } from "./Link";

interface DropdownMenuProps {}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({}) => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  const { bgColor, inversedBgColor } = useThemeBackground();
  const { textColor, inversedTextColor } = useThemeText();
  return (
    <Flex
      position="relative"
      overflow="visible"
      zIndex={2}
      alignItems="center"
      flexDir="column"
      justifyContent="center"
      bgColor={bgColor}
      gridColumnStart={6}
      gridColumnEnd={9}
      height="full"
      width={"full"}
      borderTop={0}
    >
   <VStack
      id="dropdown-menu"
      flexDir="column"
      w="full"
      alignItems="center"
      bgColor={bgColor}
      top="0px"
      position="absolute"
      zIndex={2}
      paddingTop="40px"
      border="0.4px solid "
      borderColor={inversedTextColor}
      borderTop={0}
      borderWidth={isOpen ? "0.4px" : 0}
      paddingBottom={isOpen ? 12 : 0}
    >
      <IconButton
        minH="60px"
        minW="60px"
        bgColor={bgColor}
        onClick={onToggle}
        border="0.4px solid"
        borderColor={inversedTextColor}
        borderRadius="999999px"
        icon={isOpen ? <CloseIcon /> : HamburgerIcon}
        color="inherit"
        padding="10.3125px"
        justifyContent="center"
        alignItems="center"
        aria-label="Dropdown button"
      />

      <Collapse in={isOpen} animateOpacity reverse={true}>
        <Box h="10px" />
        <VStack spacing={"8"}>
          {Routes.map((r) => (
            <Link route={r} key={r.label} />
          ))}
        </VStack>
      </Collapse>
    </VStack>
    </Flex>
  );
};

