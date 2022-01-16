import React, { useEffect, useState } from "react";
import { motion, MotionStyle, Variant, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { createAnimation } from "../utils/createAnimation";

interface ParallaxProps {
  variants?: Variants;
  styleProps?: MotionStyle;
}

const ParallaxContainer: React.FC<ParallaxProps> = ({
  children,
  styleProps,
  variants
}) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
  }, []);
  if (visible) {
    return (
      <Parallax variants={variants} styleProps={styleProps}>
        {children}
      </Parallax>
    );
  }
  return null;
};
const Parallax: React.FC<ParallaxProps> = ({
  variants,
  children
}: ParallaxProps): JSX.Element => {
  const [ref, isVisible] = useInView({ threshold: 0.4 });
  const defaultVariants = {
    show: { opacity: 1, translateY: 0 },
    hidden: { opacity: 0, translateY: -200 },
  };
  return (
    <motion.div
      ref={ref}
      variants={variants?variants:defaultVariants}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      animate={isVisible ? "show" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxContainer;
