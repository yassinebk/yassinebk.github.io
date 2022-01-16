import { Box, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

export const AnimatedHeader: React.FC<any> = ({
  children,
  animationType = "slideInDown",
  delay = 0,
  animation,
  ...props
}) => {
  return (
    <motion.div {...animation}>
      <Heading {...props}>{children}</Heading>
    </motion.div>
  );
};
