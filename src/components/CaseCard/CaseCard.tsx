import Link from 'next/link';

import React from 'react';

import Instagram from '/public/icons/iconinstagram.svg';
import Up from '/public/icons/iconarrowup.svg';
import css from './CaseCard.module.css';

import { CasePriceList } from '../CasePriceList';
import { CaseCardProps } from './types';

// Just spread props on CaseCard component like <CaseCardProps {...props}/>
export const CaseCard: React.FC<CaseCardProps> = ({ title, link, list }) => {
  return (
    <div
      className={`h-[311px] w-full max-w-[328px] rounded-card px-[32px] 
    pb-[32px] pt-[29px] shadow-input  xl:h-[384px] xl:max-w-[380px] xl:pb-[39px] xl:pt-[32px] ${css.border}`}
    >
      <Link
        href={link}
        className="mb-6 flex justify-between xl:mb-[26px]"
        rel="noopener noreferrer nofollow"
        target="_blank"
      >
        <h3 className="max-w-[150px] text-left font-dela_gothic text-s_xs uppercase xl:max-w-[200px] xl:text-xxl_xs">
          {title.map((row, idx) => (
            <span key={idx} className={`relative inline-block ${css.cardline}`}>
              {row}
            </span>
          ))}
          <Up className=" ml-[5px] inline-block h-[10px] w-[10px] xl:ml-[7px] xl:h-[15px] xl:w-[15px]" />
        </h3>
        <Instagram
          className=" btn-transition mt-2 h-5 w-5 hover:text-lightGray 
        focus:text-lightGray active:text-grey "
        />
      </Link>
      <CasePriceList list={list} />
    </div>
  );
};
