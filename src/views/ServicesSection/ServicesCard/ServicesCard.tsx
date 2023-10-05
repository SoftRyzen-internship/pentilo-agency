'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { getIconForService } from '@/utils/getIconForService';
import { handleTooltipToggle } from '@/utils/handleTooltipToggle';
import css from '@/views/ServicesSection/ServicesCard/ServicesCard.module.css';
import { ServiceProps } from '@/views/ServicesSection/ServicesCard/types';
import { ServiceCardToolTip } from '@/views/ServicesSection/ServiceCardToolTip/ServiceCardToolTip';

export const ServiceCard: React.FC<ServiceProps> = ({
  title,
  icon,
  list,
  src,
  alt,
}) => {
  const [activeTooltipIndex, setActiveTooltipIndex] = useState<number | null>(
    null,
  );

  return (
    <li
      className={`shadow-md ${css.border} relative mb-6 h-auto rounded-lg bg-white pb-8 pl-8 pr-[25px] md:max-w-[328px] xl:max-w-[380px]`}
    >
      <div className="mb-6 flex items-start pt-6">
        <h3 className=" w-[207px] font-dela_gothic text-base font-normal uppercase text-white">
          {title}
        </h3>
        <Image
          src={getIconForService(icon, src)}
          alt={alt}
          width={48}
          height={48}
        />
      </div>

      <ul className="h-auto w-[263px]">
        {list.map((item, index) => (
          <li key={index} className="mb-2 flex items-center">
            <div className="flex items-baseline">
              <span
                className={`relative z-0 pl-[25px] ${css.pseudoCheckbox}`}
              ></span>
              <p className="font-open_sans text-base font-normal">
                {item.text}
                {item.toolTip && (
                  <ServiceCardToolTip
                    toolTip={item.toolTip}
                    index={index}
                    activeIndex={activeTooltipIndex}
                    handleTooltipToggle={() =>
                      handleTooltipToggle(
                        index,
                        activeTooltipIndex,
                        setActiveTooltipIndex,
                      )
                    }
                    handleMouseEnter={() => setActiveTooltipIndex(index)}
                    handleMouseLeave={() => setActiveTooltipIndex(null)}
                  />
                )}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </li>
  );
};
