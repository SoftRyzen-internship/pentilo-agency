export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.3,
      type: 'spring',
      stiffness: 35,
    },
  },
};

export const zoomIn = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
};
