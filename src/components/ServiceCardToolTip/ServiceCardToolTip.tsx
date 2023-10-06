'use client';
import React from 'react';
import { motion } from 'framer-motion';

import { fadeIn } from '@/variants';
import { Icon } from '@/components/ui/Icon';
import { ServiceCardToolTipProps } from '@/components/ServiceCardToolTip/types';

import css from '@/components/ServicesCard/ServicesCard.module.css';

export const ServiceCardToolTip: React.FC<ServiceCardToolTipProps> = ({
  toolTip,
  index,
  activeIndex,
  handleTooltipToggle,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  const isActive = index === activeIndex;
  const positionClass = index === 0 ? css.tooltipLeft : css.tooltipRight;

  return (
    <>
      <motion.span
        variants={fadeIn}
        className="ml-1 inline-block align-middle"
        onClick={handleTooltipToggle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Icon
          icon="questionMark"
          className=" cursor-pointer align-middle transition-transform hover:scale-150 focus:scale-110"
          width={24}
          height={24}
        />
      </motion.span>
      {isActive && (
        <motion.span
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className={`relative ml-2 cursor-pointer ${positionClass}`}
        >
          <span
            className={`border-purple-tooltip bg-purple-tooltip absolute top-[2rem] h-auto min-w-[204px] max-w-fit-content -translate-x-1/2 transform rounded-[1rem] border p-2 font-open_sans text-s_xs xl:min-w-[300px] ${
              positionClass === css.tooltipLeft
                ? 'left-[10px] xl:left-[50px]'
                : 'left-[-90px] xl:left-[-50px]'
            }`}
          >
            {toolTip}
          </span>
        </motion.span>
      )}
    </>
  );
};
