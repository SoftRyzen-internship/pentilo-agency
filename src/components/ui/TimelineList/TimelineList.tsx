'use client';
import { motion } from 'framer-motion';

import React from 'react';

import css from './Timeline.module.css';
import { TimelineListProps } from './types';
import { fadeInUp } from './variants';

export const TimelineList: React.FC<TimelineListProps> = ({
  timelines,
  counter,
  className,
}) => {
  return (
    <motion.ul
      variants={fadeInUp}
      initial="hide"
      whileInView="show"
      transition={{ delay: 4 }}
      viewport={{ amount: 0.25, once: true }}
      className={`mx-auto flex max-w-max flex-col gap-10 md:gap-11 ${className}`}
    >
      {timelines.map(({ number, title, text }, idx) => (
        <motion.li
          variants={fadeInUp}
          key={idx}
          className={` timeline${counter ? idx + counter : idx} ${
            css.timeline
          }`}
        >
          <div>
            <h2
              className="mb-4 text-center font-dela_gothic text-s_middle uppercase 
                md:mb-3 md:text-left md:text-xxl_small"
            >
              <span className="mr-1 text-purple-light">{number}</span>
              {title}
            </h2>
            <p className="text-center text-s_middle md:text-left md:text-l_middle">
              {text}
            </p>
          </div>
        </motion.li>
      ))}
    </motion.ul>
  );
};
