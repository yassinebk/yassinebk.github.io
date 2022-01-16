import { Variant, Variants } from "framer-motion";

export const createAnimation = (hidden: Variant, show: Variant): Variants => {
  return {
    hidden,
    show,
  };
};
