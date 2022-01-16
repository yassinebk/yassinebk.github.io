import React, { useEffect, useState } from "react";
import { motion, MotionStyle, Variant } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ParallaxProps {
  hidden: Variant;
  show: Variant;
  styleProps?: MotionStyle;
}

const ParallaxContainer: React.FC<ParallaxProps> = ({
  children,
  hidden,
  show,
  styleProps,
}) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
  }, []);
  if (visible) {
    return (
      <Parallax hidden={hidden} show={show} styleProps={styleProps}>
        {children}
      </Parallax>
    );
  }
  return null;
};
const Parallax: React.FC<ParallaxProps> = ({
  children,
  styleProps,
  hidden,
  show,
}: ParallaxProps): JSX.Element => {
  const [ref, isVisible] = useInView({ threshold: 0.4 });
  const variants = {
    show: { opacity: 1, translateY: 0 },
    hidden: { opacity: 0, translateX: -200 },
  };
  useEffect(() => { 
    console.log(isVisible)
  },[isVisible])

  return (
    <motion.div
      ref={ref}
      variants={variants}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      animate={isVisible ? "show" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxContainer;
