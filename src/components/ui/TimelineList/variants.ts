export const fadeInUp = {
  hide: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 2,
      when: 'beforeChildren',
      staggerChildren: 0.3,
      type: 'spring',
      stiffness: 35,
    },
  },
};
