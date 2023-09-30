import Image from 'next/image';

import React from 'react';

import data from '@/data/advantages.json';
import css from './Advantages.module.css';

import { Icon } from '../ui/Icon';

export const Advantages = () => {
  return (
    <div className=" w-full">
      <h2 className=" mx-auto mb-4 max-w-[287px] text-center font-dela_gothic uppercase text-shadow-text md:mb-6 md:max-w-[486px] xl:mb-[15px] xl:w-full  xl:max-w-none xl:text-left">
        <span className="block text-[34px] leading-[1.2] blur-[2.5px] xl:text-[52px] xl:blur-[3.43px]">
          {data.title.blur}
        </span>
        <span
          className={`ml-1 block -translate-x-1 -translate-y-[16px] text-xxl_middle md:mx-auto md:max-w-[391px] 
        xl:max-w-none xl:-translate-x-0 xl:-translate-y-[25px] xl:text-xxxl_small ${css.focusTitle}`}
        >
          {data.title.focus}
        </span>
      </h2>
      <ul className="mx-auto grid max-w-[328px] gap-4 md:max-w-[380px] md:gap-6 xl:max-w-max xl:grid-cols-3 xl:gap-5">
        {data.advantages.map(({ icon, text, path }, idx) => (
          <li
            key={idx}
            className={`w-full max-w-[328px] rounded-[16px] px-[30px] pb-[30px] pt-[22px] md:h-[207px] md:max-w-[380px] md:pr-6 ${css.border}`}
          >
            <div className="mb-4 flex items-center justify-between">
              <Image
                src={path}
                width={48}
                height={48}
                alt={icon}
                className=" h-[48px] w-[48px]"
              />
              <Icon icon="arrowDown" className="h-[12px] w-[12px]" />
            </div>
            <p className=" text-s_big md:text-l_big">{text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
