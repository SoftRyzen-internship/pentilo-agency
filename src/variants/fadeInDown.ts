const transition = {
  type: 'spring',
  stiffness: 35,
  duration: 0.3,
};

export const fadeInDown = {
  initial: {
    opacity: 0,
    y: -50,
    transition,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition,
  },
};
