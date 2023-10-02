export const blur = {
  initial: {},
  animate: { backgroundColor: '#00000080', backdropFilter: 'blur(7px)' },
};

export const headerVariants = {
  initial: {
    opacity: 0,
    y: -200,
    x: '-50%',
  },
  animate: {
    opacity: 1,
    y: 0,
    x: '-50%',
    transition: {
      type: 'spring',
      stiffness: 35,
    },
  },
};
