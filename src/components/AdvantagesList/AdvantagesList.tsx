'use client';

import classNames from 'classnames';
import { motion } from 'framer-motion';

import { Icon } from '../ui/Icon';

import { fadeInUp } from '@/variants';
import data from '@/data/advantages.json';
import css from './AdvantagesList.module.css';

export const AdvantagesList: React.FC = () => {
  return (
    <motion.ul
      variants={fadeInUp}
      initial="hide"
      whileInView="show"
      viewport={{ amount: 0.25, once: false }}
      className="mx-auto grid max-w-[328px] gap-4 md:max-w-[380px] md:gap-6 
    xl:max-w-max xl:grid-cols-3 xl:gap-5"
    >
      {data.advantages.map(({ text }, idx) => {
        const itemClasses = classNames(
          'w-full max-w-[328px] rounded-[16px] px-[27px] pb-[30px] pt-[40px]',
          'md:h-[207px] md:max-w-[380px] md:pr-5',
          css.border,
          [`advant${idx}`],
        );

        return (
          <motion.li variants={fadeInUp} key={idx} className={itemClasses}>
            <Icon
              width={12}
              height={12}
              icon="arrow"
              className="ml-auto h-[12px] w-[12px] -rotate-[135deg]"
            />

            <p className=" mt-9 text-s_big md:text-l_big">{text}</p>
          </motion.li>
        );
      })}
    </motion.ul>
  );
};
