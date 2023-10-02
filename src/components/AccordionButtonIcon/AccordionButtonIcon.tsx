import { motion } from 'framer-motion';

import Arrow from 'public/icons/icon_arrow.svg';

import { transition, variants } from './variants';

import { IAccordionButtonProps } from './type';

export const AccordionButtonIcon = ({ state }: IAccordionButtonProps) => {
  return (
    <motion.div
      animate={state ? 'up' : 'down'}
      variants={variants}
      transition={transition}
    >
      <Arrow width={20} height={20} className="h-3 w-3  stroke-[2] " />
    </motion.div>
  );
};
