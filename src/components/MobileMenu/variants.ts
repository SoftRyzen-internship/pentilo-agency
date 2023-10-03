export const mobileVariants = {
  initial: {
    opacity: 0,
    x: 300,
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.3,
      ease: [0.74, 0, 0.19, 1.02],
    },
  },
  exit: {
    opacity: 0,
    x: 300,
    transition: {
      duration: 0.3,
      ease: [0.74, 0, 0.19, 1.02],
    },
  },
};
