import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === "transition";
  },
});

const AnimatedSection = ({ children, delay = 0 }) => (
  <StyledDiv
    initial={{ x:30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </StyledDiv>
);

export default AnimatedSection;
