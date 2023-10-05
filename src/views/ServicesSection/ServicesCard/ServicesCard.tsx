'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';
import css from '@/views/ServicesSection/ServicesCard/ServicesCard.module.css';
import { ServiceProps } from '@/views/ServicesSection/ServicesCard/types';

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
  const handleTooltipToggle = (index: number) => {
    if (activeTooltipIndex === index) {
      setActiveTooltipIndex(null);
    } else {
      setActiveTooltipIndex(index);
    }
  };

  const getIconForService = (imageName: string) => {
    const allowedImageNames = ['cursor', 'targetSmall', 'cursorTurget'];
    return allowedImageNames.includes(imageName) ? src : '';
  };

  return (
    <>
      <li
        className={`shadow-md ${css.border} relative mb-6 h-auto rounded-lg bg-white pb-8 pl-8 pr-[25px] md:max-w-[328px] xl:max-w-[380px]`}
      >
        <div className="mb-6 flex items-start pt-6">
          <h3 className=" w-[207px] font-dela_gothic text-base font-normal uppercase text-white">
            {title}
          </h3>
          <Image
            src={getIconForService(icon)}
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
                    <>
                      <span
                        className="ml-1 inline-block align-middle"
                        onClick={() => handleTooltipToggle(index)}
                        onMouseEnter={() => setActiveTooltipIndex(index)}
                        onMouseLeave={() => setActiveTooltipIndex(null)}
                      >
                        <Icon icon="questionMark" className="align-middle" />
                      </span>
                      {activeTooltipIndex === index && (
                        <span
                          className={`relative ml-2 cursor-pointer ${
                            index === 0
                              ? `${css.tooltipLeft}`
                              : `${css.tooltipRight}`
                          }`}
                        >
                          <span
                            className={`absolute top-[2rem] h-auto min-w-[204px] max-w-fit-content -translate-x-1/2 transform rounded-[1rem] border border-purple-tooltip bg-purple-tooltip p-2 font-open_sans text-s_xs ${
                              index === 0 ? 'left-[10px]' : 'left-[-90px]'
                            }`}
                          >
                            {item.toolTip}
                          </span>
                        </span>
                      )}
                    </>
                  )}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </li>
    </>
  );
};
