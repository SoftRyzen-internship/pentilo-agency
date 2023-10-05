'use client';
import React from 'react';
import { Icon } from '@/components/ui/Icon';
import css from '@/views/ServicesSection/ServicesCard/ServicesCard.module.css';
import { ServiceCardToolTipProps } from '@/views/ServicesSection/ServiceCardTool/types';

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
      <span
        className="ml-1 inline-block align-middle"
        onClick={handleTooltipToggle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Icon icon="questionMark" className="align-middle" />
      </span>
      {isActive && (
        <span className={`relative ml-2 cursor-pointer ${positionClass}`}>
          <span
            className={`absolute top-[2rem] h-auto min-w-[204px] max-w-fit-content -translate-x-1/2 transform rounded-[1rem] border border-purple-tooltip bg-purple-tooltip p-2 font-open_sans text-s_xs ${
              positionClass === css.tooltipLeft ? 'left-[10px]' : 'left-[-90px]'
            }`}
          >
            {toolTip}
          </span>
        </span>
      )}
    </>
  );
};
