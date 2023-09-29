import { motion } from 'framer-motion';

import { IAccordionProps } from './types';
import { transition, variants } from './variants';

export const ElementAccordion = ({ description, ind }: IAccordionProps) => {
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
      <p>{description.d1}</p>
      <p>{description.d2}</p>
      {description.d3 && <p>{description.d3}</p>}
    </motion.div>
  );
};
