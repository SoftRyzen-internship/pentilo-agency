'use client';
import React from 'react';
import { motion } from 'framer-motion';

import { fadeInUp } from '@/variants';
import { Icon } from '@/components/ui/Icon';
import { AdditionalServicesProps } from '@/components/AdditionalServices/types';

import css from '@/components/AdditionalServices/AdditionalServices.module.css';

export const AdditionalServices: React.FC<AdditionalServicesProps> = ({
  subtitle2,
  extras,
}) => {
  return (
    <>
      <motion.div
        variants={fadeInUp}
        initial="hide"
        whileInView="show"
        viewport={{ amount: 0.25, once: true }}
        className="mx-auto my-0 mb-[32px] md:max-w-[330px] xl:w-full xl:max-w-fit"
      >
        <div className="flex xl:h-full xl:items-center xl:justify-center">
          <motion.div
            variants={fadeInUp}
            className="mx-0 my-auto flex max-w-fit items-center justify-center gap-[12px] pb-10 xl:mx-0 xl:my-auto xl:w-full"
          >
            <Icon icon="starGroup" className="mr-0" width={34} height={48} />
            <motion.h3
              variants={fadeInUp}
              className="relative w-[235px] font-dela_gothic text-base font-normal uppercase text-white xl:w-[352px] xl:text-xxl_small"
            >
              {subtitle2}
            </motion.h3>
          </motion.div>
        </div>

        <motion.ul
          variants={fadeInUp}
          className="min-w-full gap-[70px] xl:flex xl:items-center xl:justify-between"
        >
          {extras.map((group, groupIndex) => (
            <motion.li
              variants={fadeInUp}
              key={groupIndex}
              className="xl:max-w-[368px]"
            >
              {group.map((item, index) => (
                <p
                  key={index}
                  className={`relative mb-[14px] flex items-baseline font-open_sans text-base font-normal xl:text-l_small`}
                >
                  <span
                    className={`relative pl-[25px] ${css.pseudoCheckbox}`}
                  ></span>
                  {item}
                  {index === group.length - 1 &&
                  groupIndex === extras.length - 1 ? (
                    <span className={css.decorArrow}></span>
                  ) : null}
                </p>
              ))}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </>
  );
};
