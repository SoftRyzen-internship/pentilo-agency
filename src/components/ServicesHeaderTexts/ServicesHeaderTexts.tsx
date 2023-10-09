'use client';
import React from 'react';
import { motion } from 'framer-motion';

import { fadeInUp } from '@/variants';
import { ServicesHeaderTextsProps } from '@/components/ServicesHeaderTexts/types';
import styles from '@/components/ServicesHeaderTexts/ServicesHeaderTexts.module.css';

const TITLE_STYLE = `${styles.textShadowTitle} xl:min-w-[420px] xl:text-xxxl_small mb-6  text-center font-dela_gothic text-3xl font-normal uppercase text-white md:mx-auto md:my-0 md:mb-6 md:max-w-[464px] xl:text-left`;
const SUBTITLE_STYLE =
  'xl:text-xxl_small mb-6  text-center font-dela_gothic text-base font-normal uppercase text-white md:mx-auto md:my-0 md:mb-6  xl:text-left';
const DESCRIPTION_STYLE =
  'xl:text-l_middle mb-10  text-center font-open_sans text-base font-normal text-white md:mx-auto md:my-0 md:mb-10 md:max-w-[508px] xl:max-w-[379px] xl:text-left';

export const ServicesHeaderTexts: React.FC<ServicesHeaderTextsProps> = ({
  title,
  subtitle1,
  description,
  descspanmobile,
  alternativespan,
  decsspandesctop,
}) => (
  <motion.div
    variants={fadeInUp}
    initial="hide"
    whileInView="show"
    viewport={{ amount: 0.25, once: true }}
    className="flex flex-col gap-y-6 md:gap-0 xl:flex-row xl:items-center xl:justify-between xl:gap-x-[49px]"
  >
    <motion.h2 variants={fadeInUp} className={TITLE_STYLE}>
      {title}
    </motion.h2>
    <motion.p
      variants={fadeInUp}
      className={SUBTITLE_STYLE + ' xl:flex-1 xl:text-left'}
    >
      {subtitle1}
    </motion.p>
    <motion.p variants={fadeInUp} className={DESCRIPTION_STYLE}>
      {description}
      <span className={`xl:hidden`}>{alternativespan}</span>
      <span className={`xl:hidden ${styles.gradientborder}`}>
        {descspanmobile}
      </span>
      <span
        className={`hidden whitespace-nowrap xl:inline-block ${styles.gradientborder}`}
      >
        {decsspandesctop}
      </span>
    </motion.p>
  </motion.div>
);
