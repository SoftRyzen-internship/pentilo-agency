export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

export const fadeInAndOutCookies = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 3,
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};
