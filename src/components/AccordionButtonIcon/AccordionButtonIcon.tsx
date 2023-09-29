import { motion } from 'framer-motion';

// import { IAccordionProps } from './types';
import { transition, variants } from './variants';
import { IAccordionButtonProps } from './type';

export const AccordionButtonIcon = ({
  children,
  ind,
}: IAccordionButtonProps) => {
  return (
    <motion.div
      key={ind}
      initial="collapsed"
      animate="open"
      exit="collapsed"
      variants={variants}
      transition={transition}
      className=" flex flex-col gap-2"
    >
      {children}
    </motion.div>
  );
};
