import classNames from 'classnames';
import { motion } from 'framer-motion';

import React from 'react';

import stats from '@/data/statistics.json';
import { StatisticsProps } from './types';
import { fadeInUp } from '@/variants';

export const Statistics: React.FC<StatisticsProps> = ({ className }) => {
  return (
    <div>
      <h2 className=" hidden">{stats.hiddenTitle}</h2>
      <motion.ul
        variants={fadeInUp}
        initial="hide"
        whileInView="show"
        viewport={{ amount: 0.25, once: true }}
        className={`mx-auto flex flex-col content-center items-center gap-12 md:h-[254px] 
        md:flex-wrap xl:h-auto xl:flex-row xl:justify-between ${className}`}
      >
        {stats.statistics.map(({ textAccent, description }, idx) => {
          const textStyles = classNames(
            'text-center font-dela_gothic text-s_middle uppercase',
            {
              'max-w-[217px] xl:max-w-[250px]': idx === 0,
              'max-w-[301px]': idx === 1,
              'max-w-[210px]': idx === 2,
              'max-w-[144px]': idx === 3,
            },
          );
          return (
            <motion.li key={idx} variants={fadeInUp}>
              <h3 className=" mb-3 text-center font-dela_gothic text-xxl_big uppercase text-purple-light xl:mb-4 xl:text-xxxl_middle">
                {textAccent}
              </h3>
              <p className={textStyles}>{description}</p>
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
};
