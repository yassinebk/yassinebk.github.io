import { Box, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

interface CustomProgressProps {
  value: number;
  index?: number;
}

export const CustomProgress: React.FC<CustomProgressProps> = ({
  value,
  index,
}) => {
  const [ref, isVisible] = useInView({threshold:0.1});
  const progressMainColor = useColorModeValue("#143258", "#ECEEF1");

  const variants = {
    show: { width: `${value}%` },
    hidden: { width: 0 },
  };
  return (
    <Box
      ref={ref}
      w={["150px", "200px", "150px","300px", "430px"]}
      h="11px"
      paddingBottom={0}
      bgColor="#88A6BC"
      display="flex"
      alignItems="center"
    >
      <motion.div
        variants={variants}
        initial="hidden"
        style={{
          backgroundColor: progressMainColor,
          height: "100%",
        }}
        animate={isVisible ? "show" : "hidden"}
        transition={{ duration: 0.7, delay: index ? index * 0.2 + 0.4 : 0.4 }}
      />
    </Box>
  );
};
