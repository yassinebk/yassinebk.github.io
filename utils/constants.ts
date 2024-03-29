import { Route } from "./types.def";

export const Routes: Route[] = [
  {
    label: "Portfolio",
    route: "/",
  },
  {
    label: "Blog",
    route: "/blog",
  },
];

export const fadeInAnimationLeft = (transition: number = 0.5) => ({
  initial: {
    translateX: -20,
    opacity: 0,
  },
  animate: {
    translateX: 0,
    opacity: 1,
  },
  transition: {
    duration: transition,
  },
});

export const fadeInAnimationRight = (
  transition: number = 0.5,
  delay: number = 0
) => ({
  initial: {
    translateX: 20,
    opacity: 0,
  },
  animate: {
    translateX: 0,
    opacity: 1,
  },
  transition: {
    duration: transition,
    delay: delay,
  },
});
export const fadeInAnimationUp = (
  transition: number = 0.5,
  delay: number = 0
) => ({
  initial: {
    translateY: -20,
    opacity: 0,
  },
  animate: {
    translateY: 0,
    opacity: 1,
  },
  transition: {
    duration: transition,
    delay,
  },
});

export const fadeInAnimationBottom = (
  transition: number = 0.5,
  delay: number = 0
) => ({
  initial: {
    translateX: +20,
    opacity: 0,
  },
  animate: {
    translateX: 0,
    opacity: 1,
  },
  transition: {
    duration: transition,
    delay,
  },
});
export const zoomInAnimation = (
  transition: number = 0.5,
  delay: number = 0
) => ({
  initial: {
    scale: 0.4,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
  },
  transition: {
    duration: transition,
    delay,
  },
});
