import Image from 'next/image';

import React from 'react';

import data from '@/data/advantages.json';
import css from './Advantages.module.css';

import { Icon } from '../ui/Icon';

// color: #FFF;
// text-align: center;
// text-shadow: 0px 0px 14.859999656677246px rgba(171, 64, 255, 0.92);
// font-family: Dela Gothic One;
// font-size: 30px;
// font-style: normal;
// font-weight: 400;
// line-height: 120%; /* 36px */
// text-transform: uppercase;

export const Advantages = () => {
  return (
    <div className=" w-full">
      <h2 className=" mb-4 mx-auto uppercase text-center text-shadow-text font-dela_gothic  max-w-[287px]">
        <span className="block text-[34px] leading-[1.2] blur-[2.5px]">
          {data.title.blur}
        </span>
        <span className="block ml-1 text-xxl_middle -translate-y-[16px] -translate-x-1">
          {data.title.focus}
        </span>
      </h2>
      <ul className="grid gap-4 mx-auto max-w-[328px] md:max-w-[380px] md:gap-6 xl:gap-5 xl:grid-cols-3 xl:max-w-max">
        {data.advantages.map(({ icon, text, path }, idx) => (
          <li
            key={idx}
            className={`pt-[22px] px-[30px] pb-[30px] w-full max-w-[328px] rounded-[16px] md:pr-6 md:max-w-[380px] md:h-[207px] ${css.border}`}
          >
            <div className="flex justify-between items-center mb-4">
              <Image src={path} width={48} height={48} alt={icon} />
              <Icon icon="arrowDown" className="w-[12px] h-[12px]" />
            </div>
            <p className=" text-s_big md:text-l_big">{text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
