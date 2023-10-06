'use client';
import { motion } from 'framer-motion';

import React from 'react';

import data from '@/data/advantages.json';
import css from './AdvantagesList.module.css';
import { fadeInUp } from '@/variants';

import { Icon } from '../ui/Icon';

export const AdvantagesList: React.FC = () => {
  return (
    <motion.ul
      variants={fadeInUp}
      initial="hide"
      whileInView="show"
      viewport={{ amount: 0.25, once: false }}
      className="xl:max-w-max mx-auto grid max-w-[328px] gap-4 md:max-w-[380px] 
    md:gap-6 xl:grid-cols-3 xl:gap-5"
    >
      {data.advantages.map(({ text }, idx) => (
        <motion.li
          variants={fadeInUp}
          key={idx}
          className={`w-full max-w-[328px] rounded-[16px] px-[27px] pb-[30px] pt-[40px] 
            md:h-[207px] md:max-w-[380px] md:pr-5 ${css.border} advant${idx}`}
        >
          <Icon
            width={12}
            height={12}
            icon="arrow"
            className="ml-auto h-[12px] w-[12px] -rotate-[135deg]"
          />

          <p className=" mt-9 text-s_big md:text-l_big">{text}</p>
        </motion.li>
      ))}
    </motion.ul>
  );
};
