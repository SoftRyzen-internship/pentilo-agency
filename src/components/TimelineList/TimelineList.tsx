'use client';
import classNames from 'classnames';
import { motion } from 'framer-motion';

import React from 'react';

import css from './Timeline.module.css';
import data from '@/data/timeline.json';
import { TimelineListItem } from '../TimelineListItem';
import { fadeInUp } from '@/variants';

export const TimelineList: React.FC = () => {
  return (
    <motion.ul
      variants={fadeInUp}
      initial="hide"
      whileInView="show"
      viewport={{ amount: 0.1, once: true }}
      className={`" mx-auto flex max-w-max flex-col gap-10 md:gap-11 xl:-order-1 
      xl:ml-[80px] xl:mr-[50px]`}
    >
      {data.timeline.map((props, idx) => {
        const itemStyle = classNames([css.timeline], {
          'xl:absolute xl:top-[489px] xl:right-[25px]': idx === 4,
          'xl:absolute xl:top-[685px] xl:right-[25px]': idx === 5,
          'xl:absolute xl:top-[854px] xl:right-[25px]': idx === 6,
        });
        return (
          <motion.li
            variants={fadeInUp}
            key={idx}
            className={` timeline${idx} ${itemStyle}`}
          >
            <TimelineListItem {...props} />
          </motion.li>
        );
      })}
    </motion.ul>
  );
};
