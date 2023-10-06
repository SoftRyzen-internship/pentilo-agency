export const fadeInLeft = {
    initial: {
      opacity: 0,
      x: -50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeOut", duration: 0.5, stiffness: 2000,
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
         stiffness: 2000,
        ease: "easeOut", duration: 0.5
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
        ease: "easeOut", duration: 0.5, stiffness: 2000,
        staggerChildren: 0.5,
      },
    },
  };

// export const parent = {
//     initial: { opacity: 0},
//     animate: { opacity: 1,
//     transition: {
//         ease: "easeOut", 
//         duration: 0.5,
//        when: "beforeChildren",
//        staggerChildren: 1,
//      }
//     }
//   }

//   export const child = {
//     initial: { opacity: 0, x: -50 },
//     animate: { opacity: 1, x: 0, 
//     //     transition: {
//     //     ease: "easeOut", duration: 0.5
//     // }
// },
//   }
  