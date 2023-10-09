export const fadeInLeft = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.5,
    },
  },
};

export const fadeInRight = {
  initial: {
    opacity: 0,
    x: 50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      ease: 'easeOut',
      duration: 0.5,
    },
  },
};

export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      ease: 'easeOut',
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};
