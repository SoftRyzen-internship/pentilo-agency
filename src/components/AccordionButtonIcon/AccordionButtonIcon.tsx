import { motion } from 'framer-motion';

import Arrow from 'public/icons/icon_arrow.svg';

import { transition, variants } from './variants';

import { IAccordionButtonProps } from './type';

export const AccordionButtonIcon = ({ state }: IAccordionButtonProps) => {
  return (
    <motion.span
      animate={state ? 'up' : 'down'}
      variants={variants}
      transition={transition}
    >
      <Arrow width={20} height={20} className="h-4 w-4   " />
    </motion.span>
  );
};
