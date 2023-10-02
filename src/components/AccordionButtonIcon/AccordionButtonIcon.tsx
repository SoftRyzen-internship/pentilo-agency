import { motion } from 'framer-motion';

import Passive from 'public/icons/icon_arrowdown.svg';

import { transition, variants } from './variants';

import { IAccordionButtonProps } from './type';

export const AccordionButtonIcon = ({ state }: IAccordionButtonProps) => {
  return (
    <motion.div
      animate={state ? 'up' : 'down'}
      variants={variants}
      transition={transition}
    >
      <Passive className="h-3 w-3  stroke-[2] " />
    </motion.div>
  );
};
