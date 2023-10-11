'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import useWindowSize from '@/utils/useWindowSize';
import { fadeInUp } from '@/variants';
import { ServicesHeaderTextsProps } from '@/components/ServicesHeaderTexts/types';
import styles from '@/components/ServicesHeaderTexts/ServicesHeaderTexts.module.css';
import { splitDescription } from '@/utils/stringUtils';

const TITLE_STYLE = `${styles.textShadowTitle} xl:min-w-[420px] xl:text-xxxl_small mb-6  text-center font-dela_gothic text-3xl font-normal uppercase text-white md:mx-auto md:my-0 md:mb-6 md:max-w-[464px] xl:max-w-[420px] xl:text-left`;
const SUBTITLE_STYLE =
  'xl:text-xxl_small mb-6  text-center font-dela_gothic text-base font-normal uppercase text-white md:mx-auto md:my-0 md:mb-6  xl-max-width-[294px] xl:text-left';
const DESCRIPTION_STYLE =
  'xl:text-l_middle mb-10  text-center font-open_sans text-base font-normal text-white md:mx-auto md:my-0 md:mb-10 md:max-w-[513px] xl:max-w-max xl:text-left';

export const ServicesHeaderTexts: React.FC<ServicesHeaderTextsProps> = ({
  title,
  subtitle1,
  description,
}) => {
  const { width } = useWindowSize();

  const [lastWord, setLastWord] = useState('');
  const [restOfDescription, setRestOfDescription] = useState('');

  useEffect(() => {
    if (width < 1440) {
      const arr = description.split(' ');
      setLastWord(arr.pop() || ' ');
      setRestOfDescription(arr.join(' ') + ' ');
    } else {
      const arr = splitDescription(description);

      setRestOfDescription(
        ` 
            <span class="block">${arr[0]}</span>
            <span class="block">${arr[1]}</span>
            <span>${arr[2]}</span>
          `,
      );
      setLastWord(description.split(' ').slice(-4).join(' ') || ' ');
    }
  }, [width, description]);

  return (
    <motion.div
      variants={fadeInUp}
      initial="hide"
      whileInView="show"
      viewport={{ amount: 0.25, once: true }}
      className="flex flex-col gap-y-[37px] md:gap-0 xl:flex-row xl:items-center xl:justify-between xl:gap-x-[38px]"
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
        <span dangerouslySetInnerHTML={{ __html: restOfDescription }}></span>
        <span className={`${styles.gradientborder}`}>{lastWord}</span>
      </motion.p>
    </motion.div>
  );
};
