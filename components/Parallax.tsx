import { motion, MotionStyle, Variants } from "framer-motion";
import React, { ReactNode, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface ParallaxProps {
  variants?: Variants;
  styleProps?: MotionStyle;
  children: ReactNode;
  treshhold?: number;
}

const ParallaxContainer: React.FC<ParallaxProps> = ({
  children,
  treshhold,
  styleProps,
  variants,
}) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
  }, []);
  if (visible) {
    return (
      <Parallax
        variants={variants}
        styleProps={styleProps}
        treshhold={treshhold}
      >
        {children}
      </Parallax>
    );
  }
  return null;
};
const Parallax: React.FC<ParallaxProps> = ({
  variants,
  styleProps,
  children,
  treshhold,
}: ParallaxProps): JSX.Element => {
  const [ref, isVisible] = useInView({
    threshold: treshhold ? treshhold : 0.8,
    triggerOnce:true
  });
  const defaultVariants = {
    show: { opacity: 1, translateY: 0 },
    hidden: { opacity: 0, translateY: -200 },
  };
  return (
    <motion.div
      ref={ref}
      variants={variants ? variants : defaultVariants}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      animate={isVisible ? "show" : "hidden"}
      style={styleProps}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxContainer;
