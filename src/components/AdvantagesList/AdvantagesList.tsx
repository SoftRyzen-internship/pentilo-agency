import { motion } from 'framer-motion';
import Image from 'next/image';

import React from 'react';

import data from '@/data/advantages.json';
import css from './AdvantagesList.module.css';
import { fadeInUp } from './variants';

import { Icon } from '../ui/Icon';

export const AdvantagesList: React.FC = () => {
  return (
    <motion.ul
      variants={fadeInUp}
      initial="hide"
      whileInView="show"
      viewport={{ amount: 0.25, once: true }}
      className="mx-auto grid max-w-[328px] gap-4 md:max-w-[380px] md:gap-6 
    xl:max-w-max xl:grid-cols-3 xl:gap-5"
    >
      {data.advantages.map(({ icon, text, path }, idx) => (
        <motion.li
          variants={fadeInUp}
          key={idx}
          className={`w-full max-w-[328px] rounded-[16px] px-[30px] pb-[30px] 
          pt-[22px] md:h-[207px] md:max-w-[380px] md:pr-6 ${css.border}`}
        >
          <div className="mb-4 flex items-center justify-between">
            <Image
              src={path}
              width={48}
              height={48}
              alt={icon}
              className=" h-[48px] w-[48px]"
            />
            <Icon icon="arrowDown" className="h-[12px] w-[12px]" />
          </div>
          <p className=" text-s_big md:text-l_big">{text}</p>
        </motion.li>
      ))}
    </motion.ul>
  );
};
