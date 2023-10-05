'use client';
import React from 'react';

import { ServicesHeaderTextsProps } from '@/views/ServicesSection/ServicesHeaderTexts/types';
import styles from '@/views/ServicesSection/ServicesHeaderTexts/ServicesHeaderTexts.module.css';

const TITLE_STYLE = `${styles.textShadowTitle} xl:min-w-[420px] xl:text-xxxl_small mb-6 max-w-[328px] text-center font-dela_gothic text-3xl font-normal uppercase text-white md:mx-auto md:my-0 md:mb-6 md:max-w-[464px] xl:text-left`;
const SUBTITLE_STYLE =
  'xl:text-xxl_small mb-6 max-w-[328px] text-center font-dela_gothic text-base font-normal uppercase text-white md:mx-auto md:my-0 md:mb-6 md:max-w-[418px] xl:text-left';
const DESCRIPTION_STYLE =
  'xl:text-l_middle mb-10 max-w-[328px] text-center font-open_sans text-base font-normal text-white md:mx-auto md:my-0 md:mb-10 md:max-w-[400px] xl:max-w-[379px] xl:text-left';

export const ServicesHeaderTexts: React.FC<ServicesHeaderTextsProps> = ({
  title,
  subtitle1,
  description,
  descspanmobile,
  decsspandesctop,
}) => (
  <div className="flex flex-col gap-y-6 xl:flex-row xl:items-center xl:justify-between xl:gap-x-[49px]">
    <h2 className={TITLE_STYLE}>{title}</h2>
    <p className={SUBTITLE_STYLE + ' xl:flex-1 xl:text-left'}>{subtitle1}</p>
    <p className={DESCRIPTION_STYLE}>
      {description}
      <span className={`xl:hidden ${styles.gradientborder}`}>
        {descspanmobile}
      </span>
      <span
        className={`hidden whitespace-nowrap xl:inline-block ${styles.gradientborder}`}
      >
        {decsspandesctop}
      </span>
    </p>
  </div>
);
