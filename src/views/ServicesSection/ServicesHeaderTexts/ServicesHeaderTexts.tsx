import React from 'react';

import styles from '@/views/ServicesSection/ServicesSection.module.css';

export const ServicesHeaderTexts = ({
  title,
  subtitle1,
  description,
  descspanmobile,
  decsspandesctop,
}) => (
  <div className="flex flex-col xl:flex-row ">
    <h2
      className={`${styles.textShadowTitle} mb-6 max-w-[328px] text-center font-dela_gothic text-3xl font-normal uppercase text-white md:mx-auto md:my-0 md:mb-6 md:max-w-[464px] xl:text-left`}
    >
      {title}
    </h2>
    <p className="mb-6 max-w-[328px] text-center font-dela_gothic text-base font-normal uppercase text-white md:mx-auto md:my-0 md:mb-6 md:max-w-[418px] xl:text-left">
      {subtitle1}
    </p>
    <p className="mb-10 max-w-[328px] text-center font-open_sans text-base font-normal text-white md:mx-auto md:my-0 md:mb-10 md:max-w-[400px] xl:max-w-[379px] xl:text-left">
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
