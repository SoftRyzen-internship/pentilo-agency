export const fadeInUp = {
  hide: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      type: 'spring',
      stiffness: 35,
    },
  },
};



export const list = {
  visible: { opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5,
      delay:1,
      ease: "easeInOut", duration: 0.5,
    },
  },
  hidden: { opacity: 0,
    transition: {
      when: "afterChildren",
    },
   },
}

export const item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 50 },
}